from calendar import monthrange
from collections import defaultdict
from datetime import date
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill, Border, Side

from db import list_period

MONTHS_RU = [
    "",
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
]


def month_bounds(year: int, month: int) -> tuple[date, date]:
    last = monthrange(year, month)[1]
    return date(year, month, 1), date(year, month, last)


def fmt_money(n: float) -> str:
    return f"{n:,.0f}".replace(",", " ") + " ₽"


async def build_summary(year: int, month: int) -> tuple[str, list[dict]]:
    d1, d2 = month_bounds(year, month)
    rows = await list_period(d1, d2)
    if not rows:
        return f"За {MONTHS_RU[month]} {year} расходов нет.", rows

    total = sum(r["amount"] for r in rows)
    by_cat: dict[str, float] = defaultdict(float)
    receipts = 0
    for r in rows:
        by_cat[r["category"]] += r["amount"]
        receipts += int(r["has_receipt"])

    lines = [
        f"<b>Отчёт: мойка, {MONTHS_RU[month]} {year}</b>",
        f"Всего: <b>{fmt_money(total)}</b>",
        f"Операций: {len(rows)}",
        f"С фото чека: {receipts}",
        "",
        "<b>По категориям</b>",
    ]
    for cat, val in sorted(by_cat.items(), key=lambda x: -x[1]):
        lines.append(f"• {cat} — {fmt_money(val)}")

    lines.append("")
    lines.append("<b>Последние записи</b>")
    for r in rows[-15:]:
        mark = " 🧾" if r["has_receipt"] else ""
        desc = (r["description"] or "")[:40]
        lines.append(
            f"{r['expense_date']} — {fmt_money(r['amount'])} — {r['category']} — {desc}{mark}"
        )
    if len(rows) > 15:
        lines.append(f"… и ещё {len(rows) - 15}. Полный список в Excel.")
    return "\n".join(lines), rows


async def build_excel(year: int, month: int) -> Path:
    _, rows = await build_summary(year, month)
    out_dir = Path(__file__).parent / "data"
    out_dir.mkdir(parents=True, exist_ok=True)
    path = out_dir / f"moyka_{year}_{month:02d}.xlsx"

    wb = Workbook()
    ws = wb.active
    ws.title = f"{MONTHS_RU[month]} {year}"

    headers = ["Дата", "Сумма", "Категория", "Описание", "Кто", "Чек", "ID"]
    ws.append(headers)

    header_fill = PatternFill("solid", fgColor="1F4E79")
    header_font = Font(bold=True, color="FFFFFF")
    thin = Border(
        left=Side(style="thin", color="D9D9D9"),
        right=Side(style="thin", color="D9D9D9"),
        top=Side(style="thin", color="D9D9D9"),
        bottom=Side(style="thin", color="D9D9D9"),
    )
    for col, _ in enumerate(headers, 1):
        cell = ws.cell(1, col)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center")

    total = 0.0
    for r in rows:
        total += r["amount"]
        ws.append(
            [
                r["expense_date"],
                r["amount"],
                r["category"],
                r["description"],
                r["user_name"],
                "да" if r["has_receipt"] else "нет",
                r["id"],
            ]
        )

    ws.append([])
    ws.append(["Итого", total])
    ws[f"A{ws.max_row}"].font = Font(bold=True)
    ws[f"B{ws.max_row}"].font = Font(bold=True)

    widths = [14, 12, 16, 40, 18, 8, 8]
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[chr(64 + i)].width = w
        for row in ws.iter_rows(min_row=1, max_row=ws.max_row, min_col=i, max_col=i):
            for cell in row:
                cell.border = thin

    wb.save(path)
    return path
