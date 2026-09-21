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
    if val < 10 or val > 200000:
        return None
    return val


def _one_total(items: list[dict], text: str) -> list[dict]:
    if not items:
        return []
    low = (text or "").lower()
    ok = [i for i in items if 10 <= float(i.get("amount") or 0) <= 200000]
    pool = ok or items
    chosen = max(pool, key=lambda i: float(i.get("amount") or 0))
    for key in ("итого", "итог", "total", "сумма к оплате"):
        pos = low.find(key)
        if pos < 0:
            continue
        tail = text[pos : pos + 40]
        if "ндс" in tail.lower() and key == "сумма":
            continue
        nums = re.findall(r"\d[\d\s]{0,8}[.,]\d{2}|\d{2,6}", tail)
        for raw in nums:
            val = _num(raw)
            if val is None:
                continue
            near = [i for i in pool if abs(float(i["amount"]) - val) < 1]
            chosen = near[0] if near else {**chosen, "amount": val}
            break
        break
    chosen["category"] = "Прочее"
    chosen["description"] = "Прочее"
    return [chosen]


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
