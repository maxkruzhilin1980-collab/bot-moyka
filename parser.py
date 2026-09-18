import re
from datetime import date, datetime, timedelta

CATEGORIES = {
    "Химия": [
        "химия", "шампунь", "пена", "активная пена", "воск", "полироль",
        "чернитель", "очиститель", "средство", "качер", "karcher",
    ],
    "Вода": ["вода", "водоканал", "скважина"],
    "Электричество": ["свет", "электричество", "электро", "энерго", "квт"],
    "Зарплата": ["зарплата", "зп", "оклад", "аванс", "сотрудник", "мойщик"],
    "Расходники": [
        "расходник", "губка", "тряпк", "полотенц", "микрофибр",
        "пакет", "пленк", "плёнк",
    ],
    "Ремонт": [
        "ремонт", "насос", "аппарат", "пистолет", "шланг", "форсунк",
        "запчаст", "мотор", "компрессор", "пва",
    ],
    "Аренда": ["аренда", "рента", "помещение"],
    "Налоги": ["налог", "взнос", "ип", "патент"],
    "Топливо": ["бензин", "дизель", "топливо", "газ", "аи-"],
    "Прочее": [],
}

AMOUNT_RE = re.compile(
    r"(?<!\d)(\d{1,3}(?:[ \u00a0]\d{3})+|\d+(?:[.,]\d{1,2})?)(?:\s*(?:₽|руб(?:\.|лей|ля)?|р\.?))?",
    re.IGNORECASE,
)

DATE_RE = re.compile(
    r"\b(\d{1,2})[./](\d{1,2})(?:[./](\d{2,4}))?\b"
)


def _to_float(raw: str) -> float | None:
    s = raw.replace("\u00a0", " ").replace(" ", "").replace(",", ".")
    try:
        value = float(s)
    except ValueError:
        return None
    if value <= 0 or value > 10_000_000:
        return None
    return value


def detect_category(text: str) -> str:
    low = text.lower()
    for name, keys in CATEGORIES.items():
        if any(k in low for k in keys):
            return name
    return "Прочее"


def parse_date(text: str, today: date) -> date:
    low = text.lower()
    if "позавчера" in low:
        return today - timedelta(days=2)
    if "вчера" in low:
        return today - timedelta(days=1)
    m = DATE_RE.search(text)
    if not m:
        return today
    d, mo, y = int(m.group(1)), int(m.group(2)), m.group(3)
    year = today.year if not y else (int(y) + 2000 if len(y) == 2 else int(y))
    try:
        return date(year, mo, d)
    except ValueError:
        return today


def parse_expenses(text: str, today: date | None = None) -> list[dict]:
    """Достаёт суммы из текста. 'химия 4800, вода 2300' → две записи."""
    if not text:
        return []
    today = today or date.today()
    found = list(AMOUNT_RE.finditer(text))
    if not found:
        return []

    expense_date = parse_date(text, today)
    results = []
    for i, m in enumerate(found):
        amount = _to_float(m.group(1))
        if amount is None:
            continue
        start = found[i - 1].end() if i else 0
        end = found[i + 1].start() if i + 1 < len(found) else len(text)
        chunk = text[start:end].strip()
        # убрать саму сумму из описания
        desc = AMOUNT_RE.sub("", chunk, count=1)
        desc = re.sub(r"\s+", " ", desc).strip(" ,.;:-")
        if not desc:
            desc = text.strip()
        results.append(
            {
                "amount": amount,
                "category": detect_category(chunk if chunk else text),
                "description": desc[:200] or "Расход",
                "expense_date": expense_date,
            }
        )
    return results
