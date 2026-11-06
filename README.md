# Ubaid Ur Rehman — Developer Portfolio

Full-stack (React + Laravel) portfolio built with React 19, Vite, Tailwind CSS 4 and Framer Motion.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Updating content

Everything on the page is read from **`src/data/portfolioData.js`** — name, summary, skills, experience, projects, education, contact.

- **Resume:** put your CV in `public/` named exactly `Ubaid_Ur_Rehman_CV.pdf`, then rebuild. The "Download CV" buttons (header, menu, hero) appear automatically; without the file they stay hidden.
- **Projects:** `projects` feeds the slider. Give a project `visual.image` (a screenshot in `public/projects/`) or `visual.nodes` (architecture diagram). `link` / `repo` are optional.
- **Team work / React builds:** `teamProjects` and `moreProjects`.
- **Skills:** `skillCategories` — pick any `react-icons` icon, or omit `icon` for a code glyph.
