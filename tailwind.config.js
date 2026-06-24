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
        bg: '#070A12',
        primary: '#22D3EE',
        secondary: '#8B5CF6',
        accent: '#22D3EE',
        text: '#F8FAFC',
        muted: '#CBD5E1',
        soft: '#94A3B8',
        elevated: '#172033'
      },
      boxShadow: {
        glow: '0 16px 42px rgba(34, 211, 238, 0.10)',
        soft: '0 12px 28px rgba(2, 6, 23, 0.32)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(34, 211, 238, 0.10), transparent 28%), radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.10), transparent 22%)'
      }
    }
  },
  plugins: []
}
