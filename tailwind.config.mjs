/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#f7f7f8',
        dark: {
          DEFAULT: '#121218',
          elevated: '#1b1b21',
        },
        muted: {
          DEFAULT: '#61646b',
          light: '#94979e',
        },
        heading: '#323239',
        accent: {
          lime: '#83ca16',
          purple: '#8624ff',
        },
        border: {
          DEFAULT: '#e0e2e6',
          light: '#edeef1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
