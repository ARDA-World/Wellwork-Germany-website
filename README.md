# Wellwork Germany GmbH — Website

Bilingual (DE / EN) static marketing site for Wellwork Germany GmbH, Löbau.

- German version lives at the root (`index.html`, `arbeitgeber.html`, `bewerber.html`, `stellenangebote.html`, `ueber-uns.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`)
- English version lives under `/en/` (`en/index.html`, `en/clients.html`, `en/candidates.html`, `en/jobs.html`, `en/about.html`, `en/contact.html`)
- Shared assets (CSS, JS, images, favicons) live under `/assets/`
- No build step. Edit HTML/CSS/JS directly.

## Local development

Serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open <http://localhost:8080/>.

## Deployment (Railway via GitHub)

The repository contains a `Dockerfile` that serves the site through `nginx:alpine`. Railway picks it up automatically when connected to the GitHub repo. The container respects Railway's injected `$PORT` via `nginx.conf.template`.

To redeploy: push to `main`. Railway rebuilds and redeploys on every push.

## Structure

```
/                  DE pages
/en/               EN pages
/assets/css/       main.css
/assets/js/        main.js (navigation, filters, collapsibles)
/assets/img/       logos, favicons, illustrations
Dockerfile         container for Railway
nginx.conf.template  nginx config with ${PORT} substitution
```
