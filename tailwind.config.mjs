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
          cyan: '#22d2ed',
          pink: '#e973bb',
          coral: '#f38370',
        },
        border: {
          DEFAULT: '#e0e2e6',
          light: '#edeef1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'blob-float': 'blob-float 14s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'blob-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -18px) scale(1.06)' },
          '66%': { transform: 'translate(-16px, 22px) scale(0.94)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
