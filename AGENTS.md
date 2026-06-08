# AGENTS.md

Instructions for Cursor Cloud Agents working in this repository.

## Overview

This repo hosts the **Hometown Serenity** website for Ashley Romero, CMH, CAHA. It is a static **Astro 5** site styled with **Tailwind CSS 3** and the Framer Brandora design language: Inter font, card shadows, sticky nav, scroll reveal, and soft motion.

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
  content/site.ts       # Homepage copy, links, contact, footer, FAQs
  content/media.ts      # Free video/audio library catalog
  layouts/BaseLayout.astro
  layouts/SiteLayout.astro
  components/           # Nav, Hero, Credentials, Services, Mission,
                        # Reflection, About, CTABand, FAQ, Footer,
                        # Archive, ScrollReveal, MotionEffects
  pages/index.astro     # Marketing homepage
  pages/library.astro   # Free library route
  styles/global.css     # Framer design tokens and reveal utilities
public/
  images/               # Marketing and preview images
  media/                # Library audio, video, and thumbnails
  favicon.ico, favicon.png, favicon.svg
.cursor/agents/         # Project-scoped custom agents
```

## Pages and routes

| Route | Page file | Primary source | Purpose |
|-------|-----------|----------------|---------|
| `/` | `src/pages/index.astro` | `src/content/site.ts` | Marketing homepage |
| `/library` | `src/pages/library.astro` | `src/content/media.ts` | Stream and download free media |

Both pages use `SiteLayout.astro`. `SiteLayout` wraps `BaseLayout.astro` and adds `AnimatedBackground`, `Nav`, `Footer`, `ScrollReveal`, and `MotionEffects`. `BaseLayout.astro` owns the HTML shell, global CSS import, font links, favicon links, and social meta tags.

## Content changes

1. Edit **`src/content/site.ts`** for homepage copy, nav links, contact details, booking/social URLs, footer cards, service copy, and FAQs.
2. Edit **`src/content/media.ts`** for library items. Add matching files under `public/media/videos/`, `public/media/audio/`, and `public/media/thumbnails/`.
3. Replace marketing art in **`public/images/`** and keep paths in `site.ts` and `BaseLayout.astro` aligned.
4. Do not hardcode booking, social, or support URLs in components. Import from `site.ts`.
5. Run `npm run build` after substantive changes.

## Section map

| Section | Component | Anchor |
|---------|-----------|--------|
| Global nav | `Nav.astro` | Links from `site.nav` |
| Hero | `Hero.astro` | none |
| Credentials | `Credentials.astro` | none |
| Services | `Services.astro` | `#services` |
| Approach | `Mission.astro` | `#approach` |
| Reflection | `Reflection.astro` | none |
| About | `About.astro` | `#about` |
| Booking CTA | `CTABand.astro` | none |
| FAQ | `FAQ.astro` | `#faq` |
| Contact/footer | `Footer.astro` | `#contact` |
| Free library | `Archive.astro` | `/library` |

`Showcase.astro` still exists, but `src/pages/index.astro` does not import it. Reintroduce or remove it intentionally rather than documenting it as a live section.

## Client-side behavior

- `Nav.astro` changes header styling after the page scrolls past 24px.
- `ScrollReveal.astro` uses `IntersectionObserver` for `.reveal` and `.reveal-fade`; it immediately reveals content when `prefers-reduced-motion` is enabled.
- `MotionEffects.astro` adds pointer tilt for `[data-tilt]` cards and a light hero parallax effect; it also respects `prefers-reduced-motion`.
- `Archive.astro` powers the library hover preview, modal audio/video player, keyboard activation, escape close, and download links.

## Public assets

- Marketing images are committed under `public/images/` and referenced by `src/content/site.ts`.
- `BaseLayout.astro` uses `/favicon.png` and points `og:image` at `https://hometownserenity.com/images/hero-forest.jpg`.
- The library directories are committed with `.gitkeep` files. Current entries in `src/content/media.ts` reference starter media and thumbnail paths; add those binaries before launch or update/remove the entries.
- If you rename images or media files, update the typed content files in the same change.

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
2. **Verify social previews** - `og:image` points to the local hero image; add `twitter:image` if platform-specific previews need it.
3. **Populate the media library** - add the audio/video/thumbnail files named in `src/content/media.ts`, or revise the starter catalog before launch.
4. **Privacy page** - not yet implemented; footer privacy and support links currently use `site.contact.supportFormUrl`.
5. **Framer cutover** - no Framer URL is referenced from `src/`; update external profiles after Vercel is live.
6. **Showcase decision** - `Showcase.astro` is unused. Keep it only if a future homepage section needs it.

## Custom agents

Project-scoped agents live in `.cursor/agents/`. Invoke with `@` mentions in Cursor:

| Agent | Use for |
|-------|---------|
| `@website-builder` | Sections, copy in `site.ts`, styling, build fixes, imagery |
| `@launch-coordinator` | Vercel deploy, domain DNS, OG meta, privacy page, go-live |

Split work by concern: site changes → `@website-builder`; production launch → `@launch-coordinator`.
