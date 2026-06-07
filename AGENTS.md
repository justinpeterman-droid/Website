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
  content/site.ts       # All copy, links, contact — single source of truth
  layouts/BaseLayout.astro
  components/           # Nav, Hero, Credentials, Services, Showcase, Mission,
                        # Reflection, About, CTABand, FAQ, Footer, ScrollReveal
  pages/index.astro     # Wires all sections
  styles/global.css     # Framer design tokens + scroll-reveal utilities
public/                 # favicon.ico, favicon.png, favicon.svg
.cursor/agents/         # Project-scoped custom agents
```

## Content changes

1. Edit **`src/content/site.ts`** for any visible copy, links, or CTAs.
2. Do not hardcode URLs in components — import from `site.ts`.
3. Run `npm run build` after substantive changes.

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

## Target branch

**All PRs MUST target `main`.**

## Project rules (immersive portfolio)

Cursor applies **`.cursor/rules/immersive-portfolio-marketing-site.mdc`** for UX, performance, accessibility, and the target Next.js + R3F stack. The live site is still **Astro 5** until a migration; when editing the current codebase, follow Astro conventions below unless the task explicitly moves to the immersive stack.

## Conventions

- Static Astro output only — no backend or database.
- Tailwind 3 via `@astrojs/tailwind` — extend tokens in `tailwind.config.mjs` and `global.css`.
- Preserve the calm, premium wellness voice; do not add clinical/medical claims beyond existing copy.
- Booking uses Google Calendar (`site.contact.bookingUrl`) until Calendly is provided.
- Do not commit secrets.

## Handoff — remaining work

Another agent built the initial site (PR #1). Useful next tasks:

1. **Deploy to Vercel** and attach `hometownserenity.com` (DNS steps in README).
2. **Add OG/social image** — `BaseLayout.astro` has placeholder meta tags; add `og:image` and a `public/og-image` asset.
3. **Replace stock imagery** — `Showcase.astro` uses an Unsplash placeholder; swap for Ashley's Canva photos from `justinpeterman-droid/Project` if needed.
4. **Retire Framer placeholder** — stop linking `snow-rules-755686.framer.app` once Vercel is live.
5. **Privacy page** — not yet implemented; add `src/pages/privacy.astro` before launch if required.

## Custom agents

Project-scoped agents live in `.cursor/agents/`. Invoke with `@` mentions in Cursor:

| Agent | Use for |
|-------|---------|
| `@website-builder` | Sections, copy in `site.ts`, styling, build fixes, imagery |
| `@launch-coordinator` | Vercel deploy, domain DNS, OG meta, privacy page, go-live |

Split work by concern: site changes → `@website-builder`; production launch → `@launch-coordinator`.
