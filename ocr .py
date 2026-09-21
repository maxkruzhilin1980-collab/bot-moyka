#!/usr/bin/env python3
"""Чтение суммы с фото чека (Tesseract). Только итог."""

from __future__ import annotations

import asyncio
import re
from io import BytesIO

from parser import parse_expenses


def _num(raw: str) -> float | None:
    try:
        val = float(raw.replace(" ", "").replace(",", "."))
    except ValueError:
        return None
    if val < 10 or val > 99999:
        return None
    return val


def _money_from_text(text: str) -> list[float]:
    found: list[float] = []
    for raw in re.findall(r"\d{2,5}[.,]\d{2}|\d{2,5}", text or ""):
        val = _num(raw)
        if val is not None:
            found.append(val)
    return found


def _pick_amount(text: str, items: list[dict]) -> float | None:
    low = (text or "").lower()
    from_items = [
        float(i["amount"])
        for i in items
        if 10 <= float(i.get("amount") or 0) <= 99999
    ]
    from_text = _money_from_text(text)
    pool = from_text or from_items
    if not pool:
        return None

    for key in ("итого", "итог", "total"):
        pos = low.find(key)
        if pos < 0:
            continue
        for val in _money_from_text(text[pos : pos + 30]):
            return val

    counts: dict[int, int] = {}
    for val in pool:
        key = round(val)
        counts[key] = counts.get(key, 0) + 1
    twice = [k for k, n in counts.items() if n >= 2]
    if twice:
        return float(max(twice))

    uniq = sorted(set(round(v) for v in pool))
    for i, a in enumerate(uniq):
        for b in uniq[i + 1 :]:
            s = a + b
            if s in uniq and s not in (a, b):
                return float(s)

    return float(max(uniq))


def _one_total(items: list[dict], text: str) -> list[dict]:
    amount = _pick_amount(text, items)
    if amount is None:
        return []
    return [
        {
            "amount": amount,
            "category": "Прочее",
            "description": "Прочее",
            "expense_date": (items[0].get("expense_date") if items else None),
        }
    ]


async def read_receipt(data: bytes) -> tuple[list[dict], str | None]:
    try:
        import pytesseract
        from PIL import Image, ImageOps, ImageFilter
    except ImportError as exc:
        return [], f"нет библиотеки OCR ({exc})"

    try:
        img = Image.open(BytesIO(data))
    except Exception as exc:
        return [], f"не открыл картинку: {exc}"

    img = ImageOps.exif_transpose(img)
    if img.mode != "RGB":
        img = img.convert("RGB")
    w, h = img.size
    if max(w, h) < 1400:
        img = img.resize((w * 2, h * 2))
    gray = ImageOps.grayscale(img)
    gray = ImageOps.autocontrast(gray)
    gray = gray.filter(ImageFilter.SHARPEN)

    def _ocr() -> str:
        langs = []
        try:
            available = pytesseract.get_languages(config="")
        except Exception:
            available = []
        for lang in ("rus+eng", "heb+eng", "rus", "eng"):
            parts = lang.split("+")
            if not available or all(p in available for p in parts):
                langs.append(lang)
        if not langs:
            langs = ["eng"]
        last_err = ""
        for lang in langs:
            try:
                return pytesseract.image_to_string(gray, lang=lang) or ""
            except Exception as exc:
                last_err = str(exc)
        raise RuntimeError(last_err or "tesseract не запустился")

    try:
        text = await asyncio.to_thread(_ocr)
    except Exception as exc:
        return [], str(exc)

    text = " ".join((text or "").split())
    if not text:
        return [], "на фото нет читаемого текста"
    items = parse_expenses(text)
    items = _one_total(items, text)
    if not items:
        return [], "не нашёл сумму на чеке"
    return items, None
