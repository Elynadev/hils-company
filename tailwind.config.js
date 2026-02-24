/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A2D',
        secondary: '#8B1A1A',
        gold: '#C9A84C',
        accent: '#2D6A4F',
        bg: '#f5f5f0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}