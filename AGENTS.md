# AGENTS.md

Instructions for Cursor Cloud Agents working in this repository.

## Overview

This repo hosts **Ashley Website** — the marketing site for [Hometown Serenity](https://hometownserenity.com) (Ashley Romero, CMH, CAHA). The stack is **Astro 5** + **Tailwind CSS v4**, deployed on **Netlify**.

A complete reference implementation lives in the sibling repo `justinpeterman-droid/Project` if this checkout is still sparse. Prefer the files in this repo once the site has been migrated.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output → dist/
npm run preview  # serve production build locally
```

## Key commands

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |
| Optimize images | `npm run optimize-images` (if script exists) |

## Project layout

```
src/
  data/site.ts          # Copy, links, services, FAQs — single source of truth
  layouts/Layout.astro  # HTML shell, SEO, OG, JSON-LD
  components/           # One component per landing section
  pages/
    index.astro         # Full landing page
    privacy.astro       # Privacy policy
public/                 # Images, favicon, robots.txt
docs/                   # Specs and link inventory (when present)
netlify.toml            # Build + headers
```

## Content changes

1. Edit `src/data/site.ts` for visible site content.
2. Keep `docs/links.json` in sync when that file exists.
3. Run `npm run build` to verify.

Booking links are interim Google Calendar URLs until Calendly is provided — update `src/data/site.ts` only.

## Target branch

**All PRs MUST target `main`.**

## Conventions

- Static Astro output; no server-side runtime required.
- Tailwind v4 via `@tailwindcss/vite` — use existing utility patterns in components.
- Wellness/compliance copy must stay accurate; see `Compliance.astro` and spec disclaimers.
- Do not commit real secrets. Use `.env.example` placeholders when env vars are needed.
- Match the calm, high-end visual tone: cream overlays, serif headings, generous whitespace.

## DNS note

`hometownserenity.com` may not be pointed at Netlify yet. Deploy and review on the Netlify preview URL first.

## Custom agents

Project-scoped agents live in `.cursor/agents/`. Use `@website-builder` for site work in this repo.
