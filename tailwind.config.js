/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6241ea',
        'dark': '#040407',
        'white': '#ffffff',
        'neutral': '#e5e5e5',
        'stone': '#888888',
        'gray': '#16161a',
        'green': '#1ed760',
      },
      animation: {
        'smooth': 'smooth 1s ease-in-out infinite',
      },
      keyframes: {
        'smooth': {
          '0%, 100%': { transform: 'translateY(5)' },
          '50%': { transform: 'translateX(-5px)' },
        },
      }
    },
  },
  plugins: [],
}
