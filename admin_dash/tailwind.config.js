/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom : {
          slate: '#E4E9EC',
          icon: '#162C55',
          back: '#F8F9FA',
        }
      }
    },
  },
  plugins: [],
}