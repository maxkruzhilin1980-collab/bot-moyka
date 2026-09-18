#!/usr/bin/env python3
"""Отчёты мойки."""

from __future__ import annotations

from collections import defaultdict
from datetime import date
from pathlib import Path

from openpyxl import Workbook

from db import list_month

MONTHS_RU = {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь",
}


def _row_get(row, key):
    if isinstance(row, dict):
        return row[key]
    return row[key]


async def build_summary(year: int, month: int) -> tuple[str, list]:
    rows = await list_month(year, month)
    title = f"{MONTHS_RU.get(month, month)} {year}"
    if not rows:
        return f"{title}\nРасходов нет.", []
    total = 0.0
    by_cat: dict[str, float] = defaultdict(float)
    lines = [f"<b>{title}</b>", ""]
    for row in rows:
        amount = float(_row_get(row, "amount"))
        total += amount
        cat = _row_get(row, "category")
        by_cat[cat] += amount
        lines.append(
            f"#{_row_get(row, 'id')} {_row_get(row, 'expense_date')} — "
            f"{amount:.0f} ₽ — {cat} — {_row_get(row, 'description')}"
        )
    lines += ["", "<b>По категориям</b>"]
    for cat, s in sorted(by_cat.items(), key=lambda x: -x[1]):
        lines.append(f"• {cat}: {s:.0f} ₽")
    lines.append(f"\n<b>Итого: {total:.0f} ₽</b>")
    return "\n".join(lines), list(rows)


async def build_excel(year: int, month: int) -> str:
    rows = await list_month(year, month)
    out = Path(__file__).resolve().parent / "data"
    out.mkdir(parents=True, exist_ok=True)
    path = out / f"moyka_{year}_{month:02d}.xlsx"
    wb = Workbook()
    ws = wb.active
    ws.title = "Расходы"
    ws.append(["Дата", "Сумма", "Категория", "Описание", "Кто", "Чек", "№"])
    total = 0.0
    for row in rows:
        amount = float(_row_get(row, "amount"))
        total += amount
        ws.append(
            [
                _row_get(row, "expense_date"),
                amount,
                _row_get(row, "category"),
                _row_get(row, "description"),
                _row_get(row, "user_name"),
                "да" if _row_get(row, "has_receipt") else "нет",
                _row_get(row, "id"),
            ]
        )
    ws.append([])
    ws.append(["Итого", total])
    wb.save(path)
    return str(path)
