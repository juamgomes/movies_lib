/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '30%'
      },
      colors: {
        'black': '#0e0e0e'
      }
    },
  },
  plugins: [],
}