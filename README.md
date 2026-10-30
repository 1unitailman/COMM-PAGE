# Community Lab — research atlas

Многостраничный статический сайт по исследованию украинской социально-развлекательной digital-экосистемы. На каждой странице находится один раздел исследования; краткая выжимка открывается в общем попапе, полный каталог источников расположен на отдельной странице.

## Структура

- `dist/index.html` — обзор;
- `dist/landscape.html` — рынок;
- `dist/competitors.html` — конкуренты;
- `dist/founders.html` — уроки основателей и операторов крупных сообществ;
- `dist/audience.html` — аудитория;
- `dist/opportunities.html` — 15 вариантов позиционирования и их проверка;
- `dist/ecosystem.html` — экосистема, рост и монетизация;
- `dist/discord-tools.html` — встроенные функции, боты и безопасность Discord;
- `dist/telegram-tools.html` — инструменты публичного Telegram-паблика;
- `dist/telegram-growth.html` — контент, продвижение и источники тем для Telegram;
- `dist/execution.html` — запуск и KPI;
- `dist/final-report.html` — финальный вывод;
- `dist/evidence.html` — аудит доказательств и конфликтов данных;
- `dist/sources.html` — каталог из 261 источника.

## Recommended: local web server

Open PowerShell in this folder and run:

```powershell
python -m http.server 8080 --directory dist
```

Then open:

```text
http://localhost:8080
```

Stop the server with `Ctrl+C`.

## Без сервера

Open `dist/index.html` directly in a browser. Keep all CSS and JavaScript files in the `dist` folder next to `index.html`.
