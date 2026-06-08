# Hometown Serenity

Premium static website for **Hometown Serenity** by Ashley Romero, CMH, CAHA.

The site has a marketing homepage and a free video/audio library. Content is sourced from the Canva business site and kept in typed content files so copy, links, and media entries stay out of components.

Visual design follows the high-end layout patterns from the Framer Brandora template: Inter typography, card shadows, sticky nav, scroll reveal, and soft motion effects.

## Local development

Requires Node `>=22.12.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Routes and content

| Route | Page file | Main content source | Notes |
|-------|-----------|---------------------|-------|
| `/` | `src/pages/index.astro` | `src/content/site.ts` | Marketing page sections, navigation, contact, footer cards, FAQs |
| `/library` | `src/pages/library.astro` | `src/content/media.ts` | Free media archive rendered by `Archive.astro` |

`SiteLayout.astro` wraps both routes with global chrome: `AnimatedBackground`, `Nav`, `Footer`, `ScrollReveal`, and `MotionEffects`. `BaseLayout.astro` owns the document shell, global CSS import, fonts, favicon links, and social meta tags.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Astro**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Custom domain (replace Framer placeholder)

1. In Vercel → Project → Settings → Domains, add `hometownserenity.com` (and `www` if desired).
2. Update DNS at your registrar:
   - Apex: `A` record → `76.76.21.21`
   - `www`: `CNAME` → `cname.vercel-dns.com`
3. Wait for SSL provisioning.
4. Update Instagram/Facebook links to the new domain.
5. Stop using the Framer placeholder URL (`snow-rules-755686.framer.app`).

## Free video & audio library

Upload MP4/MP3 files to `public/media/` and register them in `src/content/media.ts`. See [public/media/README.md](public/media/README.md) for step-by-step instructions.

Visitors can stream content in a modal player or download files directly from the **Library** section.

The catalog currently points at starter paths such as `/media/audio/grounding-breath.mp3` and `/media/videos/identity-reflection.mp4`. The folders are committed with `.gitkeep` files, but the media binaries and thumbnails must be added before launch or the catalog entries should be changed.

Marketing imagery lives in `public/images/` and is referenced from `src/content/site.ts` and `src/layouts/BaseLayout.astro`. Keep those paths in sync when replacing art.

## Project structure

- `src/content/site.ts` - homepage copy, navigation, services, CTAs, contact, social links, footer cards, FAQs
- `src/content/media.ts` - free video/audio library catalog
- `src/layouts/BaseLayout.astro` - document shell, global CSS, fonts, favicon, social meta
- `src/layouts/SiteLayout.astro` - shared nav, footer, background, and motion scripts
- `src/components/` - page sections and shared UI components
- `src/styles/global.css` - Framer design tokens and scroll-reveal utilities
- `public/images/` - committed marketing and preview images
- `public/media/` - library videos, audio files, and thumbnails

## Stack

- [Astro 5](https://astro.build)
- [Tailwind CSS 3](https://tailwindcss.com)

## Agents

- **[AGENTS.md](./AGENTS.md)** — instructions for Cursor Cloud Agents (setup, commands, conventions, handoff notes).
- **[`.cursor/agents/website-builder.md`](./.cursor/agents/website-builder.md)** — site development (`@website-builder`).
- **[`.cursor/agents/launch-coordinator.md`](./.cursor/agents/launch-coordinator.md)** — Vercel deploy, domain, and go-live (`@launch-coordinator`).
