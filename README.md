# Run the dashboard

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

## Without a server

Open `dist/index.html` directly in a browser. Keep all CSS and JavaScript files in the `dist` folder next to `index.html`.
