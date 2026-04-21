# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # ESLint across .js/.jsx/.ts/.tsx/.astro
npm run build-types  # TypeScript check (no emit)
```

No test suite configured.

## Architecture

Personal website for Eka Putra at `upkoding.com`. Astro v4 with React islands + Tailwind CSS, deployed to Vercel (serverless adapter, `output: 'hybrid'`).

**Page rendering model:** Most pages are static. `RecentPosts.astro` is explicitly `prerender = true` and fetches posts at build time from the Substack API (`substackapi.com/api/feeds/blog.upkoding.com`). The actual blog is hosted externally at `blog.upkoding.com` — the local `src/pages/posts/*.md` files are legacy/unused sample content.

**Layer breakdown:**
- `src/templates/` — base HTML shells (`Base.astro` wraps all pages, `BasePost.astro` wraps markdown posts)
- `src/partials/` — page sections (React components + one Astro file); composed in `index.astro`
- `src/boilerplate-components/` — generic UI primitives (BlogCard, Tags, Pagination, etc.) kept separate from site-specific partials
- `src/utils/AppConfig.ts` — single source of truth for site metadata (name, description, author, locale)
- `src/pages/` — Astro file-based routing; `posts/[...page].astro` for paginated blog listing

**Design tokens** (defined in `tailwind.config.js`):
- `ink-{base,surface,elevated,border}` — background/surface hierarchy (light theme)
- `sand-{100-500}` — text scale (100 = darkest)
- `flame` = `#2563EB` (primary accent), `teal` = `#059669`
- Font: DM Sans for both `font-sans` and `font-display`

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`).
