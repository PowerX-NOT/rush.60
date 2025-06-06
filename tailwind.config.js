/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: '#e2725b',
        'dark-terracotta': '#c67c5c',
        sand: '#f5e6d3',
        clay: '#a66a5b',
        'light-sand': '#fcf8f3',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-in',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};