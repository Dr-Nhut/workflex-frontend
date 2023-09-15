/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      height: {
        screen: '100dvh',
        header: '81px'
      },
      colors: {
        primary: '#0284c7',
        brand_gray: '#9ca3af',
        brand_stone: '#fafaf9',
        brand_black: "#0c0a09"
      },
      backgroundImage: {
        'banner': "linear-gradient(to bottom, rgba(225, 231, 235, 0.1), rgba(255, 231, 235, 0)),url('homepage-background.jpg')",
      }
    },
  },
  plugins: [],
}

