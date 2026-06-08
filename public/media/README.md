# Media uploads

Add your free video and audio files here. The site will stream and offer downloads automatically.

The catalog in `src/content/media.ts` already includes starter entries. Add files with those exact names before launch, or edit/remove the entries so visitors do not hit missing media.

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

3. Rebuild or refresh the dev server.

## Tips

- Keep video files under ~50MB when possible for faster loads.
- Use square or 16:9 thumbnails (~800px wide) for best hover previews.
- File names: use lowercase and hyphens, no spaces.
