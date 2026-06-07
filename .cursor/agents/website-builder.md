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
- Site content in `src/content/site.ts`
- Library catalog in `src/content/media.ts`
- Local imagery in `public/images/`

## Components

`Nav`, `Hero`, `Credentials`, `Services`, `Showcase`, `Mission`, `Reflection`, `About`, `CTABand`, `FAQ`, `Footer`, `ScrollReveal`, `MotionEffects`, and `AnimatedBackground` are wired through `SiteLayout` and `src/pages/index.astro`.

`Archive` renders the free library at `src/pages/library.astro` from `src/content/media.ts`.

## When invoked

- Editing copy, links, or CTAs in `site.ts`
- Adding or removing free library entries in `media.ts`
- Adding/fixing sections or responsive layout
- Vercel build or deploy issues
- OG image, favicon, or showcase photo updates
- FAQ accordion or scroll-reveal behavior

## Workflow

1. Read `AGENTS.md` and `src/content/site.ts` first. Read `src/content/media.ts` too for library work.
2. Keep changes scoped — one section per task when possible.
3. Reuse existing components and Framer tokens in `global.css`.
4. Run `npm run build` after substantive changes (must pass).
5. Preserve wellness tone and existing compliance language in FAQs.
6. Keep production images local under `public/images/` unless the task explicitly asks for a remote asset.

## Do not

- Add backend services — static site only.
- Hardcode booking/social URLs in components.
- Switch hosting to Netlify without explicit request.
- Reference `src/data/site.ts` or Tailwind v4 — this repo uses `src/content/site.ts` and Tailwind 3.
- Add library catalog entries without adding matching files under `public/media/`, unless the entries are clearly marked as placeholders.

## Known gaps (see AGENTS.md handoff)

- Dedicated social preview card and `twitter:image` are not finalized.
- Starter `/library` entries need real media files before launch.
- Privacy page not yet created
- Custom domain not yet pointed at Vercel
