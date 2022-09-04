/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5768ff',
        'dark': '#040407',
        'white': '#ffffff',
        'neutral': '#e5e5e5',
        'stone': '#888888',
        'gray': '#222228',
        'green': '#1ed760',
      },
      animation: {
        'smooth': 'smooth 60s ease-in-out infinite',
      },
      keyframes: {
        'smooth': {
          '0%': { transform: 'translateY(50)' },
          '10%': { transform: 'translateX(-50px)' },
          '80%': { transform: 'translateY(500px)' },
          '50%': { transform: 'translateX(200px)' },
        },
      }
    },
  },
  plugins: [],
}
