# Media uploads

Add your free video and audio files here. The site will stream and offer downloads automatically.

The `/library` page reads its catalog from `src/content/media.ts` and renders it with `Archive.astro`. Files placed here are served from the site root, so `public/media/audio/grounding-breath.mp3` is referenced as `/media/audio/grounding-breath.mp3`.

## Folders

| Folder | Formats |
|--------|---------|
| `videos/` | `.mp4` (H.264 recommended for broad browser support) |
| `audio/` | `.mp3`, `.m4a`, `.wav` |
| `thumbnails/` | `.jpg` or `.png` poster images for hover previews |

## Add a new item

1. Copy your file into the correct folder above.
2. Open `src/content/media.ts` and add an entry to the `items` array:

```ts
{
  id: 'my-unique-slug',
  title: 'My Session Title',
  tags: ['Video', 'Mindfulness'],
  type: 'video',
  src: '/media/videos/my-file.mp4',
  thumbnail: '/media/thumbnails/my-file.jpg',
  description: 'Optional short description.',
},
```

3. Use `type: 'audio'` for audio files and point `src` to `/media/audio/...`.
4. Rebuild or refresh the dev server.
5. Open `/library` and test both Play and Save.

## Constraints

- Every `id` should be unique. The component uses it as item metadata and future-safe stable identity.
- `src` must point to a real file. Astro will build even if this string path is wrong, but the player and download link will 404.
- `thumbnail` is optional. Without it, the hover preview falls back to a text label.
- Keep filenames lowercase with hyphens. Avoid spaces because these files are linked directly from HTML attributes.
- Keep the `tags` array short. The row layout is designed for one or two concise labels.

## Tips

- Keep video files under ~50MB when possible for faster loads.
- Use square or 16:9 thumbnails (~800px wide) for best hover previews.
- The starter catalog in `src/content/media.ts` is a launch checklist, not proof that media files exist. Add matching files before publishing the library, or remove entries that are not ready.
