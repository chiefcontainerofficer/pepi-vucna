/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBBF24', // Modern amber/yellow
        'primary-dark': '#F59E0B', // Darker yellow for hover states
        'primary-light': '#FCD34D', // Lighter yellow
        'black': '#000000',
        'gray-900': '#111827',
      },
      animation: {
        'slide-in': 'slideIn 1.5s ease-out forwards',
        'scroll-text': 'scrollText 12s linear infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scrollText: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}; 