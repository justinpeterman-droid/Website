# AGENTS.md

Instructions for Cursor Cloud Agents working in this repository.

## Overview

This repo hosts the **Hometown Serenity** marketing site for Ashley Romero, CMH, CAHA. It is a static **Astro 5** single-page site styled with **Tailwind CSS 3** and the Framer Brandora design language (Inter font, card shadows, scroll-reveal).

**Deploy target:** Vercel (not Netlify). See `README.md` for domain setup.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output → dist/
npm run preview
```

Requires **Node >= 22.12.0**.

## Key commands

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |

Build verified: `npm run build` completes successfully.

## Project layout

```
src/
  content/site.ts       # Site copy, links, contact, navigation, image paths
  content/media.ts      # Free library catalog for /library
  layouts/BaseLayout.astro
  components/           # Nav, Hero, Credentials, Services, Showcase, Mission,
                        # Reflection, About, CTABand, FAQ, Footer, Archive,
                        # ScrollReveal, MotionEffects
  pages/index.astro     # Wires all sections
  pages/library.astro   # Wires the free library archive
  styles/global.css     # Framer design tokens + scroll-reveal utilities
public/images/          # Local hero, service, preview, and showcase images
public/media/           # Library audio/video/thumbnail uploads
public/                 # favicon.ico, favicon.png, favicon.svg
.cursor/agents/         # Project-scoped custom agents
```

## Content changes

1. Edit **`src/content/site.ts`** for visible site copy, navigation, links, contact info, CTAs, and site image paths.
2. Edit **`src/content/media.ts`** for `/library` items. Add real media files under `public/media/` before publishing new catalog entries.
3. Keep production images local under `public/images/` unless a task explicitly asks for remote assets.
4. Do not hardcode booking, social, or footer URLs in components. Import them from `site.ts`.
5. Run `npm run build` after substantive changes.

## Section map

| Section | Component | Anchor |
|---------|-----------|--------|
| Nav | `Nav.astro` | — |
| Hero | `Hero.astro` | — |
| Credentials | `Credentials.astro` | — |
| Services | `Services.astro` | `#services` |
| Showcase | `Showcase.astro` | — |
| Approach | `Mission.astro` | `#approach` |
| Reflection | `Reflection.astro` | — |
| About | `About.astro` | `#about` |
| Booking CTA | `CTABand.astro` | `#contact` |
| FAQ | `FAQ.astro` | — |
| Footer | `Footer.astro` | — |
| Free Library | `Archive.astro` via `pages/library.astro` | `/library` |

## Target branch

**All PRs MUST target `main`.**

## Conventions

- Static Astro output only — no backend or database.
- Tailwind 3 via `@astrojs/tailwind` — extend tokens in `tailwind.config.mjs` and `global.css`.
- Preserve the calm, premium wellness voice; do not add clinical/medical claims beyond existing copy.
- Booking uses Google Calendar (`site.contact.bookingUrl`) until Calendly is provided.
- Do not commit secrets.

## Handoff — remaining work

Another agent built the initial site (PR #1). Useful next tasks:

1. **Deploy to Vercel** and attach `hometownserenity.com` (DNS steps in README).
2. **Finalize social previews** — `BaseLayout.astro` has `og:image` pointing at `/images/hero-forest.jpg`; add a dedicated social card and `twitter:image` if launch requires exact preview sizing.
3. **Replace stock-style imagery with Ashley's own photos** if brand assets become available. Current images are hosted locally in `public/images/`.
4. **Retire Framer placeholder** — stop linking `snow-rules-755686.framer.app` once Vercel is live.
5. **Privacy page** — not yet implemented; add `src/pages/privacy.astro` before launch if required.
6. **Library media files** — add real files for the starter entries in `src/content/media.ts`, or remove entries that are not ready before publishing `/library`.

## Custom agents

Project-scoped agents live in `.cursor/agents/`. Invoke with `@` mentions in Cursor:

| Agent | Use for |
|-------|---------|
| `@website-builder` | Sections, copy in `site.ts`, styling, build fixes, imagery |
| `@launch-coordinator` | Vercel deploy, domain DNS, OG meta, privacy page, go-live |

Split work by concern: site changes → `@website-builder`; production launch → `@launch-coordinator`.
