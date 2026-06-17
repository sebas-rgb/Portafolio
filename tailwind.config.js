/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#111827',
        bg: '#0B0F14',
        primary: '#4F9CF9',
        secondary: '#7C3AED',
        accent: '#22D3EE',
        text: '#F9FAFB',
        muted: '#9CA3AF'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(79, 156, 249, 0.18)',
        soft: '0 12px 35px rgba(15, 23, 42, 0.35)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(79, 156, 249, 0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.14), transparent 22%)'
      }
    }
  },
  plugins: []
}
