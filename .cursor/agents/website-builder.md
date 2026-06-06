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
- Content in `src/content/site.ts`

## Components

`Nav`, `Hero`, `Credentials`, `Services`, `Showcase`, `Mission`, `Reflection`, `About`, `CTABand`, `FAQ`, `Footer`, `ScrollReveal` — wired in `src/pages/index.astro`.

## When invoked

- Editing copy, links, or CTAs in `site.ts`
- Adding/fixing sections or responsive layout
- Vercel build or deploy issues
- OG image, favicon, or showcase photo updates
- FAQ accordion or scroll-reveal behavior

## Workflow

1. Read `AGENTS.md` and `src/content/site.ts` first.
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

- OG image meta not fully configured
- Showcase uses Unsplash stock photo
- Privacy page not yet created
- Custom domain not yet pointed at Vercel
