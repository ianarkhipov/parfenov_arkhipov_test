/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/login.component.html",
    "./src/app/login.component.css"
  ],
  theme: {
    colors: {
    'background-basic': '#F9F9F9',
    'black-brand': '#101D2D',
    'blue-brand': '#4C54F4',
    'grey-dark': '#6F727A',
    'table-stroke': '#E0E2E7',
    'true-white': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        main: ['Inter'],
      },
    },
  },
  plugins: [

  ],
}

