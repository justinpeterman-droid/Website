/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#f8f7f5',
        surface: '#ffffff',
        dark: {
          DEFAULT: '#1a1917',
          elevated: '#2a2826',
        },
        muted: {
          DEFAULT: '#5c5a57',
          light: '#8a8783',
        },
        heading: '#2e2c29',
        accent: {
          sage: '#6b8f71',
          'sage-light': '#8aab8f',
          lavender: '#7c6b9e',
          teal: '#5a9a9e',
          sand: '#c4a882',
          rose: '#b8878a',
          /* legacy aliases mapped to calm palette */
          lime: '#6b8f71',
          purple: '#7c6b9e',
          cyan: '#5a9a9e',
          pink: '#b8878a',
          coral: '#c4a882',
        },
        border: {
          DEFAULT: '#e4e1dc',
          light: '#efede9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
