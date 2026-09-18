#!/usr/bin/env python3
"""Чтение суммы с фото чека (Tesseract)."""

from __future__ import annotations

import asyncio
from io import BytesIO

from parser import parse_expenses


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
    if not items:
        preview = text[:180]
        return [], f"не нашёл сумму. Распознал: {preview}"
    return items, None
