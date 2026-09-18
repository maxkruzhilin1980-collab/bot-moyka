#!/usr/bin/env python3
"""База расходов мойки."""

from __future__ import annotations

import os
from datetime import date, datetime
from pathlib import Path

import aiosqlite

DB_PATH = Path(os.getenv("DB_PATH") or Path(__file__).resolve().parent / "data" / "expenses.db")


async def init_db() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        await db.execute(
            """
            CREATE TABLE IF NOT EXISTS expenses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                user_name TEXT NOT NULL DEFAULT '',
                amount REAL NOT NULL,
                category TEXT NOT NULL DEFAULT 'Прочее',
                description TEXT NOT NULL DEFAULT '',
                expense_date TEXT NOT NULL,
                has_receipt INTEGER NOT NULL DEFAULT 0,
                source_chat_id INTEGER,
                source_message_id INTEGER,
                created_at TEXT NOT NULL
            )
            """
        )
        await db.commit()


async def add_expense(
    user_id: int,
    user_name: str,
    amount: float,
    category: str,
    description: str,
    expense_date: date,
    has_receipt: bool = False,
    source_chat_id: int | None = None,
    source_message_id: int | None = None,
) -> int:
    await init_db()
    async with aiosqlite.connect(DB_PATH) as db:
        cur = await db.execute(
            """
            INSERT INTO expenses (
                user_id, user_name, amount, category, description,
                expense_date, has_receipt, source_chat_id, source_message_id, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                user_id,
                user_name or "",
                float(amount),
                category or "Прочее",
                description or "Расход",
                expense_date.isoformat() if isinstance(expense_date, date) else str(expense_date),
                1 if has_receipt else 0,
                source_chat_id,
                source_message_id,
                datetime.now().isoformat(timespec="seconds"),
            ),
        )
        await db.commit()
        return int(cur.lastrowid)


async def delete_expense(expense_id: int) -> None:
    await init_db()
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute("DELETE FROM expenses WHERE id = ?", (expense_id,))
        await db.commit()


async def list_period(start: date, end: date) -> list[aiosqlite.Row]:
    await init_db()
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        cur = await db.execute(
            """
            SELECT * FROM expenses
            WHERE expense_date >= ? AND expense_date <= ?
            ORDER BY expense_date, id
            """,
            (start.isoformat(), end.isoformat()),
        )
        return await cur.fetchall()


async def list_month(year: int, month: int) -> list[aiosqlite.Row]:
    start = date(year, month, 1)
    if month == 12:
        end = date(year, 12, 31)
    else:
        end = date(year, month + 1, 1).replace(day=1)
        from datetime import timedelta

        end = end - timedelta(days=1)
    return await list_period(start, end)
