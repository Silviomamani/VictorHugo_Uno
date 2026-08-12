/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          // Renaming kept for backward compat — now warm beach tones
          dark: '#6B4C32',     // Warm caramel wood
          deep: '#4A3220',     // Deep warm brown
          medium: '#8B6340',   // Mid warm amber-brown
          light: '#C4924A',    // Sand gold accent
          soft: '#E8C07A',     // Warm golden sand
          sky: '#FEF9F0',      // Warm cream sky
        },
        sand: {
          light: '#FAF6F0',    // Warm cream off-white
          DEFAULT: '#F2E8D9',  // Warm sandy beige
          dark: '#DDD0BB',     // Deeper sand
          muted: '#BFB09A',    // Warm taupe
        },
        foam: {
          DEFAULT: '#FFF8F0',  // Warm white
          pure: '#FFFFFF',
        },
        terra: {
          DEFAULT: '#D4956A',  // Terracotta/coral
          light: '#E8B48A',    // Soft terracotta
          dark: '#B0704A',     // Deep terracotta
        },
        pine: {
          DEFAULT: '#5C7A55',
          light: '#7A9E72',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
}
