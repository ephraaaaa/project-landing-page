/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#332928',
        'secondary': '#E4D9C5'
      },
      screens:{
        'xs': '425px',
        'xxs': '375px',
        '4k': '2560px'
  
      }
    }
    ,
  },
  plugins: [],
}