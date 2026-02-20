# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Conventions

- When creating a new page component, always add a navigation link to it in the header (`src/App.jsx`).
- All git commits must follow the [Conventional Commits](https://www.conventionalcommits.org) spec: `<type>[optional scope]: <description>` (e.g. `feat(header): add dark mode toggle`, `fix(section): correct border color prop`).
- After every coding task, update `CLAUDE.md` to reflect any new or changed files (Architecture section), implemented features (Planned Features checklist), and data file conventions.

## Architecture

React 19 + Vite portfolio site styled with Tailwind CSS v3.

- `src/main.jsx` — entry point, mounts `<App>` into `#root`
- `src/App.jsx` — root layout: sticky header with contact links, then `<main>` containing `<Section>` blocks
- `src/Section.jsx` — reusable section component; accepts `title`, `borderColor` (Tailwind class), and `children` props. Renders a left-bordered section card. Children are wrapped in a `<div>` (not `<p>`) to support any content including grids.
- `src/ProjectCard.jsx` — renders a single project card; accepts a `project` prop (object from `projects.js`). Shows title, description, tech tags, and optional GitHub/live links.
- `src/data/projects.js` — array of project objects; edit this file to add/update projects
- `src/index.css` — Tailwind directives only (`@tailwind base/components/utilities`)
- `src/App.css` — additional app-level styles if needed

**Styling convention:** all styling is done via Tailwind utility classes directly in JSX. The `borderColor` prop on `<Section>` expects a full Tailwind class string (e.g. `"border-green-600"`).

The project uses plain JavaScript (`.jsx`), not TypeScript.

## Design Requirements

**Color palette:**
- Light mode (default): Ghost White background (#F7F7FF / `bg-gray-50`), black text
- Accent colors: 
  - Turf Green (#307351) → `border-green-600` 
  - Tuscan Sun (#F5CB5C) → `border-yellow-600`
  - Cerulean (#1282A2) → `border-blue-600`
- Use accent colors sparingly and strategically (borders, buttons, highlights)

**Dark mode:**
- User-toggleable via a button (not auto-detect system preference)
- Store preference in localStorage
- Dark mode palette TBD (maintain accessibility/contrast)

**Tone & Accessibility:**
- Professional but approachable — avoid "hacker aesthetic" dark themes by default
- No fade-in animations or excessive motion
- Contact links (LinkedIn, GitHub, Email) must be prominently visible at the top
- High contrast for readability
- This portfolio demonstrates both technical skills AND social/communication abilities

## Content Management

**Approach:** Simple JavaScript data files (no database/CMS for now).

All portfolio content lives in `src/data/` as plain JS/JSON for easy editing:

- `src/data/personal.js` — name, bio, tagline, social links *(planned)*
- `src/data/projects.js` — array of project objects *(implemented)*
- `src/data/skills.js` — tech stack & skills *(planned)*

**Rationale:** 
- Quick to implement and maintain
- No backend/database complexity
- Updates via git commit (professional workflow)
- Can migrate to headless CMS later if needed

**Example structure:**
```js
// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description...",
    tech: ["React", "Vue", "Spring Boot"],
    liveUrl: "https://example.com", // leave empty string "" to hide the link
    githubUrl: "https://github.com/username/repo" // leave empty string "" to hide the link
  }
]
```

Components import and `.map()` over these arrays to render content dynamically.

## Planned Features

- [ ] Dark mode toggle with localStorage persistence
- [ ] Contact form section (email integration TBD)
- [x] Projects showcase with card components (`ProjectCard.jsx` + `src/data/projects.js`)
- [ ] Skills/tech stack display
- [ ] Responsive mobile design

## Learning Goals

This project is for learning React and experimenting with Claude Code, not under time pressure.

**Focus areas:**
- Component composition and reusability
- Props and state management  
- Working with data (mapping arrays to JSX)
- Form handling and controlled components
- Dark mode implementation
- Tailwind CSS proficiency

When implementing features, prioritize clear, well-commented code that demonstrates understanding over complex solutions.

## Notes

Portfolio for a full-stack developer (experience with Vue, React, Spring Boot, databases). Starting internship at Wortell. The site should reflect technical competence while being welcoming and showing strong communication skills.