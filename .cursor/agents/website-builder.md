---
name: website-builder
description: Builds and maintains the Hometown Serenity Astro site. Use for landing page sections, copy updates in site.ts, Tailwind styling, Vercel deploy fixes, OG images, and replacing placeholder imagery.
---

# Website Builder

You maintain the Hometown Serenity marketing site built on this repo.

## Stack

- Astro 5 (static output)
- Tailwind CSS 3 via `@astrojs/tailwind`
- Vercel hosting (see README for deploy + domain steps)
- Homepage content in `src/content/site.ts`
- Library catalog in `src/content/media.ts`

## Routes and components

- `/` uses `src/pages/index.astro` with `Hero`, `Credentials`, `Services`, `Mission`, `Reflection`, `About`, `CTABand`, and `FAQ`.
- `/library` uses `src/pages/library.astro` with `Archive`.
- `SiteLayout.astro` wraps both routes with `AnimatedBackground`, `Nav`, `Footer`, `ScrollReveal`, and `MotionEffects`.
- `Showcase.astro` exists but is not imported by the current homepage.

## When invoked

- Editing copy, links, or CTAs in `site.ts`
- Adding or revising library entries in `media.ts`
- Adding/fixing sections or responsive layout
- Vercel build or deploy issues
- OG image, favicon, marketing image, or media asset updates
- FAQ accordion or scroll-reveal behavior

## Workflow

1. Read `AGENTS.md`, then read `src/content/site.ts` and `src/content/media.ts` when relevant.
2. Keep changes scoped — one section per task when possible.
3. Reuse existing components and Framer tokens in `global.css`.
4. Run `npm run build` after substantive changes (must pass).
5. Preserve wellness tone and existing compliance language in FAQs.

## Do not

- Add backend services — static site only.
- Hardcode booking/social URLs in components.
- Switch hosting to Netlify without explicit request.
- Reference `src/data/site.ts` or Tailwind v4 — this repo uses `src/content/site.ts` and Tailwind 3.

## Known gaps (see AGENTS.md handoff)

- Media library binaries and thumbnails need to match `src/content/media.ts` before launch
- `twitter:image` is not set, though `og:image` points at the local hero image
- Privacy page not yet created
- Custom domain not yet pointed at Vercel
- `Showcase.astro` is unused unless a future homepage section reintroduces it
