# Hometown Serenity

Premium single-page website for **Hometown Serenity** — Ashley Romero, CMH, CAHA.

Content is sourced from the Canva business site. Visual design follows the high-end layout patterns from the Framer Brandora template (Inter typography, card shadows, sticky nav, accordion FAQ).

## Local development

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

## Project structure

- `src/content/site.ts` — all copy, links, and contact info
- `src/content/media.ts` — free video/audio library catalog
- `src/components/` — page sections (Nav, Hero, Services, Archive, FAQ, etc.)
- `src/styles/global.css` — Framer design tokens and scroll-reveal utilities

## Stack

- [Astro 5](https://astro.build)
- [Tailwind CSS 3](https://tailwindcss.com)

## Agents

- **[AGENTS.md](./AGENTS.md)** — instructions for Cursor Cloud Agents (setup, commands, conventions, handoff notes).
- **[`.cursor/agents/website-builder.md`](./.cursor/agents/website-builder.md)** — site development (`@website-builder`).
- **[`.cursor/agents/launch-coordinator.md`](./.cursor/agents/launch-coordinator.md)** — Vercel deploy, domain, and go-live (`@launch-coordinator`).
