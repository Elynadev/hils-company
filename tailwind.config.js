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
        // Communication colors
        'comm-primary': '#2563EB',
        'comm-secondary': '#1E40AF',
        'comm-accent': '#3B82F6',
        // Events colors
        'event-primary': '#DC2626',
        'event-secondary': '#991B1B',
        'event-accent': '#EF4444',
        // African Conscience Chill colors
        'acc-primary': '#FF6B35',
        'acc-secondary': '#F7931E',
        'acc-accent': '#FFA500',
        'acc-dark': '#E63946',
        'acc-bright': '#FF4500',
        // Tourisme colors (keep original)
        'tour-primary': '#1B3A2D',
        'tour-secondary': '#8B1A1A',
        'tour-accent': '#2D6A4F',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}