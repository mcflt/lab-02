/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#0a0a0a',
        'bg-surface': '#141414',
        'bg-card': '#1c1c1c',
        'accent': '#00d4ff',
        'accent-dim': 'rgba(0, 212, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'slow-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}