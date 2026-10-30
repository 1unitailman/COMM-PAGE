# Community Lab — research atlas

Многостраничный статический сайт по исследованию украинской социально-развлекательной digital-экосистемы. На каждой странице находится один раздел исследования; краткая выжимка открывается в общем попапе, полный каталог источников расположен на отдельной странице.

## Структура

- `dist/index.html` — обзор;
- `dist/landscape.html` — рынок;
- `dist/competitors.html` — конкуренты;
- `dist/audience.html` — аудитория;
- `dist/opportunities.html` — возможности;
- `dist/ecosystem.html` — экосистема, рост и монетизация;
- `dist/execution.html` — запуск и KPI;
- `dist/final-report.html` — финальный вывод;
- `dist/sources.html` — все 130 источников.

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
