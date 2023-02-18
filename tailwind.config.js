const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './ui/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', ...fontFamily.sans],
      },
      colors: {
        'primary': '#1c78ff',
        'dark': '#171717',
        'white': '#ffffff',
        'neutral': '#e5e5e5',
        'stone': '#888888',
        'gray': '#222228',
        'green': '#1ed760',
      },
      animation: {
        'smooth': 'smooth 30s ease-in-out infinite',
        'smooth2': 'smooth2 30s ease-in-out infinite',
        'fade': 'fade 1s ease-in-out',
      },
      keyframes: {
        'smooth': {
          '0%, 100%': { transform: 'translate(30vw)' },
          '25%': { transform: 'translateX(-20vw)' },
          '50%': { transform: 'translate(40vw, 30vh)' },
          '75%': { transform: 'translateY(80vh)' },
        },
        'smooth2': {
          '0%, 100%': { transform: 'translate(55vw, -4vh)' },
          '25%': { transform: 'translateX(30vw)' },
          '50%': { transform: 'translate(20vw, 30vh)' },
          '75%': { transform: 'translate(55vw, 30vh)' },
        },
        'fade': {
          '0%': { opacity: '0', filter: 'brightness(1) blur(20px)' },
          '10%': { opacity: '1', filter: 'brightness(2) blur(10px)' },
          '100%': { opacity: '1', filter: 'brightness(1) blur(0)' },
        }
      }
    },
  },
  plugins: [],
}
