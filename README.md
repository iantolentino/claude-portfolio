# Ian Tolentino — Portfolio

Personal portfolio built with **React 19 + Vite + TypeScript + Tailwind CSS v4**.

Live projects fetched directly from the GitHub API — no hardcoded data.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Routing | React Router v7 |
| Components | shadcn/ui-style (cva + Radix primitives) |
| Icons | lucide-react + custom SVGs (GitHub/LinkedIn) |
| Data | GitHub REST API (live fetch, categorized, cached) |

---

## Pages

| Page | Description |
|---|---|
| **Home** | Hero, live GitHub stats, top 3 featured projects by stars |
| **Projects** | All repos fetched from GitHub, filter by category + search, live counts |
| **Skills** | Tech stack by category — pill chips, no fake percentages |
| **Experience** | Timeline — Strata Staff Global, Nanox Philippines, internship, education |
| **About** | Bio, education, achievements, philosophy |

---

## Getting Started

```bash
git clone https://github.com/iantolentino/claude-portfolio.git
cd claude-portfolio
pnpm install
pnpm dev
```

App runs at `http://localhost:5173`

> Requires Node.js 18+ and pnpm (`npm install -g pnpm` if not installed)

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky nav + mobile hamburger drawer
│   ├── icons.tsx         # Custom GitHub/LinkedIn SVGs
│   └── ui/               # Button, Badge, Card, Separator
├── lib/
│   ├── github.ts         # GitHub API fetch, categorize, cache, fallback
│   └── utils.ts          # cn() utility (clsx + tailwind-merge)
└── pages/
    ├── Home.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    ├── Experience.tsx
    └── About.tsx
```

---

## GitHub API

Projects are fetched live from `https://api.github.com/users/iantolentino/repos` and categorized into:
**Web Apps · Python · Desktop · Extensions · Automation · Utilities**

Falls back to static data if the API is rate-limited or unavailable.

---

## Contact

**Ian Tolentino** — Backend Developer & Web Developer  
[iantolentino0110@gmail.com](mailto:iantolentino0110@gmail.com) · [github.com/iantolentino](https://github.com/iantolentino) · [linkedin.com/in/iantolentino](https://www.linkedin.com/in/iantolentino)
