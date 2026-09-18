# MoykaFinanceBot — учёт расходов мойки в группе

Партнёр пишет в общую группу как раньше. Бот читает сообщения, записывает
расходы и 1-го числа присылает отчёт.

## 1. Telegram

1. Бот уже создан: `@MoykaFinanceBot`
2. BotFather → `/setprivacy` → `@MoykaFinanceBot` → **Disable**
3. Создайте группу, например «Мойка расходы»
4. Добавьте партнёра
5. Добавьте `@MoykaFinanceBot`
6. Профиль группы → администраторы → назначить бота админом
   (достаточно права читать сообщения)

## 2. Установка

Нужен Python 3.11+.

```bash
cd moyka-finance-bot
python -m venv .venv

# Windows
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

В `.env` вставьте токен от BotFather:

```
BOT_TOKEN=токен
OWNER_ID=0
PARTNER_IDS=
REPORT_CHAT_ID=
GROUP_CHAT_ID=0
TIMEZONE=Europe/Moscow
```

## 3. Первый запуск

```bash
python bot.py
```

Окно не закрывайте.

1. Напишите боту в личку `/id` — свой id в `OWNER_ID`
2. В группе напишите `/id` — Chat id группы в `GROUP_CHAT_ID`
   (у групп он обычно отрицательный, это нормально: `-100123...`)
3. Партнёр пусть тоже напишет боту в личку `/start` и `/id`, его id — в `PARTNER_IDS`
4. `REPORT_CHAT_ID` = ваш id, если отчёт только вам, или id группы, если сводку видят оба
5. Ctrl+C и снова `python bot.py`

## 4. Как писать в группе

- `химия 4800`
- `вода 2300 вчера`
- фото чека с подписью `12500 насос`
- или фото, потом ответом `4500 шампунь`

Обычный разговор без суммы бот игнорирует.

Команды в группе: `/today` `/month` `/export`

## 5. Чтобы бот был всегда онлайн

Компьютер включён с запущенным `python bot.py`, либо VPS.
