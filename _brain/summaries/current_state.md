# CURRENT STATE

> Read at start of every EXECUTION_MODE session. Update at end of every session.

---

## System State
EXECUTION_MODE

## Current Phase
MVP

## Last Completed Task
B01 — Mobile navbar hamburger (drawer with backdrop, icon/label links, closes on nav/backdrop tap)
Completed: 2026-06-30

## Next Task
B02 — Dark/light theme toggle
Depends on: none

## Active Blockers
None

## Session Notes
- Stack: Vite 8 + React 19 + TS + Tailwind v4 + React Router v7
- Deployed: https://github.com/iantolentino/claude-portfolio.git (branch: main)
- GitHub API integration live in src/lib/github.ts — module-level cache, paginated fetch, categorizeProject(), fallback data
- lucide-react v1.21 has no brand icons — GithubIcon/LinkedinIcon are custom SVGs in src/components/icons.tsx
- Tailwind v4 CSS-first config — theme vars in src/index.css @theme block, NOT tailwind.config.js
- ponytail skill installed at .claude/skills/ponytail/SKILL.md

---

Last updated: 2026-06-30
