const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
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
        'smooth': 'smooth 60s ease-in-out infinite',
        'smooth2': 'smooth2 60s ease-in-out infinite',
        'fade': 'fade 1s ease-in-out',
      },
      keyframes: {
        'smooth': {
          '0%': { transform: 'translateY(50)' },
          '10%': { transform: 'translateX(-50px)' },
          '80%': { transform: 'translateY(500px)' },
          '50%': { transform: 'translateX(200px)' },
        },
        'smooth2': {
          '0%, 100%': { transform: 'translateX(280%)' },
          '25%': { transform: 'translateX(200%)' },
          '50%': { transform: 'translate(150%, 50%)' },
          '75%': { transform: 'translate(230%, 80%)' },
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
