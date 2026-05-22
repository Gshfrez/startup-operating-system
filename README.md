# Startup Operating System

An interactive web app based on a rigorous entrepreneurship tutorial for learning how to build startups from zero in the AI-native age.

## What is inside

- Entrepreneurship mental model map
- Startup lifecycle explorer
- Methodology chooser
- Market and product thinking checklists
- AI-native operating model
- Founder skill curriculum
- Practical exercises
- Interactive 12-week learning roadmap
- Glossary search
- Local-storage progress tracking and reflection notebook
- **Deep Research page**: durable startup principles, what AI changed, what AI did not change, hype patterns, beginner mistakes, and advanced founder practices
- **Personal Founder Curriculum page**: 10 capabilities, correct learning order, exercises, AI usage rules, 12-week plan, templates, and founder operating system
- **Applied Case Study page**: physiotherapist workflow pain point decomposed into modules, prioritized tasks, evidence gates, and framework-section mappings

## Pages

- `index.html` — main interactive app
- `research.html` — Deep Research synthesis on entrepreneurship in the AI-native age
- `curriculum.html` — personal founder curriculum and practice system
- `case-study.html` — applied physiotherapist case study mapped to the framework

## Tech stack

This is a dependency-free static web app:

- `index.html`
- `research.html`
- `curriculum.html`
- `case-study.html`
- `styles.css`
- `app.js`

No build step is required.

## Run locally

Open `index.html` in your browser, or use any static file server:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Deploy with GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After pushing to GitHub:

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.
4. The workflow will publish the static app.

For a plain static site, GitHub Pages can also deploy from branch:

1. Go to **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main` and `/root`.
4. Save.

## Founder learning standard

A serious week produces evidence, not only notes:

- real customer/problem conversations or attempts
- market or product memo
- competitor/product teardowns
- MVP or experiment design
- decision journal entry
- insight log update
- weekly review

## License

MIT
