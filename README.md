# alfi-portofolio

Personal portfolio of **Alfiano Mahardika** — Data & AI Architect.

**Live site:** https://vezice.github.io/alfi-portofolio/

## Stack

- [React 18](https://react.dev/) + [Vite 6](https://vite.dev/) — app framework and build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) — styling, with a custom theme (`src/index.css`)
- [Framer Motion](https://www.framer.com/motion/) — scroll-driven and entrance animations
- [Lenis](https://lenis.darkroom.engineering/) — smooth scrolling

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deployment

Every push to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the site and deploys it to
GitHub Pages. No manual build step is needed.

## Repository layout

| Path | What it is |
| --- | --- |
| `src/` | React app — one component per section (`Hero`, `Projects`, `Journey`, `Credentials`, `About`, `Contact`) |
| `public/images/` | Images actually used by the site |
| `Projects/` | Jupyter notebooks — ML/ANN/CNN coursework and research projects |
| `_legacy/` | Previous version of the site and stashed unused assets |

The very first version of this site was based on
[nisarhassan12/portfolio-template](https://github.com/nisarhassan12/portfolio-template)
(kept in `_legacy/`); the current site is a custom React build.
