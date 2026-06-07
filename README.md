# Hometown Serenity

Premium single-page website for **Hometown Serenity** — Ashley Romero, CMH, CAHA.

Content is sourced from the Canva business site. Visual design follows the high-end layout patterns from the Framer Brandora template (Inter typography, card shadows, sticky nav, accordion FAQ).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Requires Node `>=22.12.0`.

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Content and assets

- Edit `src/content/site.ts` for site copy, navigation, contact links, footer cards, service cards, and the hero image path.
- Edit `src/content/media.ts` for the free library catalog shown on `/library`.
- Store reusable site images in `public/images/` and reference them with root-relative paths such as `/images/hero-forest.jpg`.
- Store library files in `public/media/videos/`, `public/media/audio/`, and `public/media/thumbnails/`.
- Keep production images local unless a task explicitly asks for remote assets. Recent fixes moved the hero, service card, footer preview, and showcase images away from remote Unsplash URLs.

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

The checked-in catalog describes the intended starter items, but the media files themselves are not committed. Before launch, add real files for each `src` and `thumbnail` path or remove the placeholder entries from `src/content/media.ts`.

## Common pitfalls

- `npm run build` verifies Astro, Tailwind, and TypeScript syntax, but it does not prove every string path in `src/content/media.ts` points to an existing file. Open `/library` and test Play and Save for each item after adding media.
- Footer preview cards use `PreviewWindow.astro` with image paths from `site.footer.linkCards`. If a footer link changes, update the preview `url`, `image`, and `alt` together in `src/content/site.ts`.
- Open Graph metadata lives in `src/layouts/BaseLayout.astro`. It currently uses the local hero forest image for `og:image`; add a dedicated social image and `twitter:image` if launch requirements call for exact social-card sizing.
- Privacy Policy and Terms & Support links currently point to the support Google Form. Add local pages and update `src/content/site.ts` or `Footer.astro` when final policy copy is ready.

## Project structure

- `src/content/site.ts` — all copy, links, and contact info
- `src/content/media.ts` — free video/audio library catalog
- `src/components/` — page sections (Nav, Hero, Services, Archive, FAQ, etc.)
- `src/pages/index.astro` — homepage section wiring
- `src/pages/library.astro` — free library route
- `src/styles/global.css` — Framer design tokens and scroll-reveal utilities
- `public/images/` — local site imagery and footer preview images
- `public/media/` — library audio, video, and thumbnails

## Stack

- [Astro 5](https://astro.build)
- [Tailwind CSS 3](https://tailwindcss.com)

## Agents

- **[AGENTS.md](./AGENTS.md)** — instructions for Cursor Cloud Agents (setup, commands, conventions, handoff notes).
- **[`.cursor/agents/website-builder.md`](./.cursor/agents/website-builder.md)** — site development (`@website-builder`).
- **[`.cursor/agents/launch-coordinator.md`](./.cursor/agents/launch-coordinator.md)** — Vercel deploy, domain, and go-live (`@launch-coordinator`).
