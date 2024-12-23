/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E3A8A', 
        'night-sky': '#2E3A59', 
        'light-gray': '#D1D5DB', 
        'gold': '#FFD700', 
      },
    },
  },
  plugins: [],
};

