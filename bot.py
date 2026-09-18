import asyncio
import logging
import os
from datetime import date
from io import BytesIO
from zoneinfo import ZoneInfo

from aiogram import Bot, Dispatcher, F
from aiogram.filters import Command, CommandStart
from aiogram.types import (
    CallbackQuery,
    FSInputFile,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    Message,
)
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from dotenv import load_dotenv

from db import add_expense, delete_expense, init_db
from ocr import read_receipt
from parser import parse_expenses
from report import MONTHS_RU, build_excel, build_summary

load_dotenv()

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("moyka")

BOT_TOKEN = os.getenv("BOT_TOKEN", "").strip()
OWNER_ID = int(os.getenv("OWNER_ID") or 0)
PARTNER_IDS = {
    int(x.strip())
    for x in os.getenv("PARTNER_IDS", "").split(",")
    if x.strip().isdigit()
}
REPORT_CHAT_ID = int(os.getenv("REPORT_CHAT_ID") or OWNER_ID or 0)
GROUP_CHAT_ID = int(os.getenv("GROUP_CHAT_ID") or 0)
TIMEZONE = ZoneInfo(os.getenv("TIMEZONE") or "Europe/Moscow")


def in_work_chat(message: Message) -> bool:
    if not GROUP_CHAT_ID:
        return True
    if message.chat.id == GROUP_CHAT_ID:
        return True
    if message.from_user and message.from_user.id == OWNER_ID:
        return True
    return False


def allowed(user_id: int) -> bool:
    if OWNER_ID and user_id == OWNER_ID:
        return True
    if PARTNER_IDS and user_id in PARTNER_IDS:
        return True
    # пока OWNER_ID не задан — пускаем всех, чтобы можно было узнать /id
    if not OWNER_ID:
        return True
    return False


def display_name(message: Message) -> str:
    u = message.from_user
    if not u:
        return "unknown"
    return u.full_name or u.username or str(u.id)


def confirm_kb(expense_ids: list[int]) -> InlineKeyboardMarkup:
    buttons = [
        [InlineKeyboardButton(text=f"Удалить #{eid}", callback_data=f"del:{eid}")]
        for eid in expense_ids
    ]
    return InlineKeyboardMarkup(inline_keyboard=buttons)


async def save_from_text(message: Message, text: str, has_receipt: bool, silent_if_empty: bool) -> None:
    items = parse_expenses(text)
    if not items:
        if silent_if_empty:
            return
        await message.reply(
            "Не нашёл сумму. Напишите так:\n"
            "<code>химия 4800</code>\n"
            "<code>вода 2300 вчера</code>\n"
            "или фото чека с подписью <code>4500 шампунь</code>.",
            parse_mode="HTML",
        )
        return

    ids = []
    lines = ["Записал:"]
    for item in items:
        eid = await add_expense(
            user_id=message.from_user.id,
            user_name=display_name(message),
            amount=item["amount"],
            category=item["category"],
            description=item["description"],
            expense_date=item["expense_date"],
            has_receipt=has_receipt,
            source_chat_id=message.chat.id,
            source_message_id=message.message_id,
        )
        ids.append(eid)
        lines.append(
            f"#{eid} {item['expense_date']} — "
            f"{item['amount']:.0f} ₽ — {item['category']} — {item['description']}"
        )
    await message.reply("\n".join(lines), reply_markup=confirm_kb(ids))


def month_from_args(args: str | None) -> tuple[int, int]:
    today = date.today()
    if not args:
        return today.year, today.month
    parts = args.replace(".", " ").replace("-", " ").split()
    if len(parts) == 1 and parts[0].isdigit():
        m = int(parts[0])
        if 1 <= m <= 12:
            return today.year, m
    if len(parts) >= 2 and parts[0].isdigit() and parts[1].isdigit():
        a, b = int(parts[0]), int(parts[1])
        if a > 12:
            return a, b
        return b if b > 12 else today.year, a
    return today.year, today.month


async def send_report(bot: Bot, chat_id: int, year: int, month: int) -> None:
    text, rows = await build_summary(year, month)
    await bot.send_message(chat_id, text, parse_mode="HTML")
    if rows:
        path = await build_excel(year, month)
        await bot.send_document(
            chat_id,
            FSInputFile(path),
            caption=f"Excel: {MONTHS_RU[month]} {year}",
        )


async def monthly_job(bot: Bot) -> None:
    if not REPORT_CHAT_ID:
        return
    today = date.today()
    # 1-е число — отчёт за прошлый месяц
    month = 12 if today.month == 1 else today.month - 1
    year = today.year - 1 if today.month == 1 else today.year
    await send_report(bot, REPORT_CHAT_ID, year, month)


def main() -> None:
    if not BOT_TOKEN or BOT_TOKEN.endswith("HERE"):
        raise SystemExit("Укажите BOT_TOKEN в файле .env")

    bot = Bot(BOT_TOKEN)
    dp = Dispatcher()

    @dp.message(CommandStart())
    async def start(message: Message) -> None:
        await message.answer(
            "Бот учёта расходов мойки.\n\n"
            "Добавьте меня в рабочую группу с партнёром и сделайте админом.\n"
            "В группе напишите /id — этот Chat id впишите в GROUP_CHAT_ID.\n\n"
            "Как писать расходы:\n"
            "• <code>химия 4800</code>\n"
            "• <code>вода 2300 вчера</code>\n"
            "• фото + подпись <code>12500 насос</code>\n\n"
            "Команды:\n"
            "В группе пишите так:\n"
            "• <code>/add химия 4800</code>\n"
            "• <code>/add вода 2300 вчера</code>\n\n"
            "Команды:\n"
            "/add сумма и описание\n"
            "/id — ваш id и id этого чата\n"
            "/today — расходы за сегодня\n"
            "/month — этот месяц\n"
            "/export — Excel",
            parse_mode="HTML",
        )

    @dp.message(F.new_chat_members)
    async def on_added(message: Message) -> None:
        me = await bot.me()
        if not any(u.id == me.id for u in message.new_chat_members):
            return
        await message.answer(
            "Я в группе. Напишите /id и сохраните Chat id как GROUP_CHAT_ID.\n"
            "Сделайте меня админом, иначе часть сообщений могу не видеть."
        )

    @dp.message(Command("id"))
    async def cmd_id(message: Message) -> None:
        kind = "группа" if message.chat.type in {"group", "supergroup"} else "личный чат"
        extra = (
            "Этот Chat id впишите в GROUP_CHAT_ID в файле .env"
            if message.chat.type != "private"
            else "Свой id впишите в OWNER_ID, id партнёра — в PARTNER_IDS."
        )
        await message.answer(
            f"Тип: {kind}\n"
            f"Ваш id: <code>{message.from_user.id}</code>\n"
            f"Chat id: <code>{message.chat.id}</code>\n\n"
            f"{extra}",
            parse_mode="HTML",
        )

    @dp.message(Command("add"))
    async def cmd_add(message: Message) -> None:
        if not in_work_chat(message) or not allowed(message.from_user.id):
            await message.reply("Нет доступа к записи расходов.")
            return
        args = (message.text or "").partition(" ")[2].strip()
        if not args:
            await message.reply("Пример: /add химия 4800")
            return
        await save_from_text(message, args, has_receipt=False, silent_if_empty=False)

    @dp.message(Command("month"))
    async def cmd_month(message: Message) -> None:
        if not in_work_chat(message) or not allowed(message.from_user.id):
            return
        args = message.text.partition(" ")[2]
        year, month = month_from_args(args)
        await send_report(bot, message.chat.id, year, month)

    @dp.message(Command("export"))
    async def cmd_export(message: Message) -> None:
        if not in_work_chat(message) or not allowed(message.from_user.id):
            return
        args = message.text.partition(" ")[2]
        year, month = month_from_args(args)
        path = await build_excel(year, month)
        await message.answer_document(FSInputFile(path))

    @dp.message(Command("today"))
    async def cmd_today(message: Message) -> None:
        if not in_work_chat(message) or not allowed(message.from_user.id):
            return
        from db import list_period

        today = date.today()
        rows = await list_period(today, today)
        if not rows:
            await message.answer("Сегодня расходов пока нет.")
            return
        total = sum(r["amount"] for r in rows)
        lines = [f"Сегодня: <b>{total:.0f} ₽</b>"]
        for r in rows:
            lines.append(
                f"#{r['id']} {r['amount']:.0f} ₽ — {r['category']} — {r['description']}"
            )
        await message.answer("\n".join(lines), parse_mode="HTML")

    @dp.callback_query(F.data.startswith("del:"))
    async def on_delete(call: CallbackQuery) -> None:
        if not allowed(call.from_user.id):
            await call.answer("Нет доступа", show_alert=True)
            return
        eid = int(call.data.split(":")[1])
        await delete_expense(eid)
        await call.answer("Удалено")
        await call.message.edit_text(f"Запись #{eid} удалена.")

    @dp.message(F.photo)
    async def on_photo(message: Message) -> None:
        if not in_work_chat(message) or not allowed(message.from_user.id):
            return
        caption = message.caption or ""
        if caption.strip() and parse_expenses(caption):
            await save_from_text(message, caption, has_receipt=True, silent_if_empty=False)
            return

        status = await message.reply("Смотрю чек…")
        buf = BytesIO()
        await bot.download(message.photo[-1], destination=buf)
        items, ocr_error = await read_receipt(buf.getvalue())
        if items:
            ids = []
            lines = ["С чека записал:"]
            for item in items:
                if caption.strip():
                    item["description"] = f"{item['description']} ({caption.strip()})"
                    item["category"] = parse_expenses(caption)[0]["category"] if parse_expenses(caption) else item["category"]
                eid = await add_expense(
                    user_id=message.from_user.id,
                    user_name=display_name(message),
                    amount=item["amount"],
                    category=item["category"],
                    description=item["description"],
                    expense_date=item["expense_date"],
                    has_receipt=True,
                    source_chat_id=message.chat.id,
                    source_message_id=message.message_id,
                )
                ids.append(eid)
                lines.append(
                    f"#{eid} {item['expense_date']} — "
                    f"{item['amount']:.0f} ₽ — {item['category']} — {item['description']}"
                )
            await status.edit_text("\n".join(lines), reply_markup=confirm_kb(ids))
            return

        if caption.strip():
            await save_from_text(message, caption, has_receipt=True, silent_if_empty=False)
            return
        hint = ocr_error or "не распознал цифры"
        await status.edit_text(
            "Не смог прочитать сумму с фото.\n"
            f"Причина: {hint}\n\n"
            "Напишите ответом, например: <code>4500 химия</code>.",
            parse_mode="HTML",
        )

    @dp.message(F.text)
    async def on_text(message: Message) -> None:
        if not in_work_chat(message) or not allowed(message.from_user.id):
            return
        if message.text.startswith("/"):
            return
        has_receipt = bool(
            message.reply_to_message and message.reply_to_message.photo
        )
        # в группе не отвечаем на обычный разговор без суммы
        silent = message.chat.type in {"group", "supergroup"} and not has_receipt
        await save_from_text(
            message,
            message.text,
            has_receipt=has_receipt,
            silent_if_empty=silent,
        )

    async def on_startup() -> None:
        await init_db()
        scheduler = AsyncIOScheduler(timezone=TIMEZONE)
        scheduler.add_job(
            monthly_job,
            "cron",
            day=1,
            hour=10,
            minute=0,
            args=[bot],
        )
        scheduler.start()
        log.info("Bot started")

    dp.startup.register(on_startup)
    asyncio.run(dp.start_polling(bot))


if __name__ == "__main__":
    main()
