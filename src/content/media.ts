export type MediaType = 'video' | 'audio';

export interface MediaItem {
  id: string;
  title: string;
  tags: string[];
  type: MediaType;
  /** Path under /public, e.g. /media/videos/my-session.mp4 */
  src: string;
  /** Poster/thumbnail — local path or remote URL until files are uploaded */
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
      thumbnail:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      description: 'A short guided breath sequence to settle the nervous system.',
    },
    {
      id: 'identity-reflection',
      title: 'Identity Reflection Session',
      tags: ['Video', 'Hypnotherapy'],
      type: 'video',
      src: '/media/videos/identity-reflection.mp4',
      thumbnail:
        'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=600&q=80',
      description: 'An introductory reflection on reconnecting with your authentic self.',
    },
    {
      id: 'solfeggio-restoration',
      title: 'Solfeggio Restoration Soundscape',
      tags: ['Audio', 'Sound healing'],
      type: 'audio',
      src: '/media/audio/solfeggio-restoration.mp3',
      thumbnail:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      description: 'Calming frequencies for deep restoration and inner quiet.',
    },
    {
      id: 'morning-intention',
      title: 'Morning Intention Setting',
      tags: ['Video', 'Mindfulness'],
      type: 'video',
      src: '/media/videos/morning-intention.mp4',
      thumbnail:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      description: 'Begin your day by turning up the volume on your soul\'s purpose.',
    },
  ],
};
