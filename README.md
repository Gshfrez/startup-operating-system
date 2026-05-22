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

## Tech stack

This is a dependency-free static web app:

- `index.html`
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

## Create a public GitHub repo and push

```bash
gh repo create startup-operating-system --public --source=. --remote=origin --push
```

Or create a public empty repository in the GitHub UI, then run:

```bash
git init
git add .
git commit -m "Build startup operating system web app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/startup-operating-system.git
git push -u origin main
```

## License

MIT
