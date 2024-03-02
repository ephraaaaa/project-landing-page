/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F78000',
        'secondary': '#FAEEDC'
      }
    }
    ,
  },
  plugins: [],
}