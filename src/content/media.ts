export type MediaType = 'video' | 'audio';

export interface MediaItem {
  id: string;
  title: string;
  tags: string[];
  type: MediaType;
  /** Path under /public, e.g. /media/videos/my-session.mp4 */
  src: string;
  /** Optional poster/thumbnail under /public */
  thumbnail?: string;
  description?: string;
}

export interface ArchiveSection {
  label: string;
  headline: string;
  headlineMuted: string;
  intro: string;
  items: MediaItem[];
}

/**
 * To add new free content:
 * 1. Drop your .mp4 / .mp3 file into public/media/videos/ or public/media/audio/
 * 2. Optional: add a thumbnail to public/media/thumbnails/
 * 3. Add a new entry below with matching paths
 */
export const archive: ArchiveSection = {
  label: 'Free library',
  headline: 'Guided practices —',
  headlineMuted: 'listen, watch, and take them with you.',
  intro:
    'Complimentary sessions and soundscapes to support your journey between appointments. Stream here or download to keep.',
  items: [
    {
      id: 'grounding-breath',
      title: 'Grounding Breath Practice',
      tags: ['Audio', 'Breathwork'],
      type: 'audio',
      src: '/media/audio/grounding-breath.mp3',
      thumbnail: '/media/thumbnails/grounding-breath.jpg',
      description: 'A short guided breath sequence to settle the nervous system.',
    },
    {
      id: 'identity-reflection',
      title: 'Identity Reflection Session',
      tags: ['Video', 'Hypnotherapy'],
      type: 'video',
      src: '/media/videos/identity-reflection.mp4',
      thumbnail: '/media/thumbnails/identity-reflection.jpg',
      description: 'An introductory reflection on reconnecting with your authentic self.',
    },
    {
      id: 'solfeggio-restoration',
      title: 'Solfeggio Restoration Soundscape',
      tags: ['Audio', 'Sound healing'],
      type: 'audio',
      src: '/media/audio/solfeggio-restoration.mp3',
      thumbnail: '/media/thumbnails/solfeggio-restoration.jpg',
      description: 'Calming frequencies for deep restoration and inner quiet.',
    },
    {
      id: 'morning-intention',
      title: 'Morning Intention Setting',
      tags: ['Video', 'Mindfulness'],
      type: 'video',
      src: '/media/videos/morning-intention.mp4',
      thumbnail: '/media/thumbnails/morning-intention.jpg',
      description: 'Begin your day by turning up the volume on your soul\'s purpose.',
    },
  ],
};
