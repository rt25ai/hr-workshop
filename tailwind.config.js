/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'turquoise': '#13B8C4',
        'sage': '#456160',
        'cream': '#F6F8F6'
      },
      fontFamily: {
        'hebrew': ['Assistant', 'Alef', 'Noto Sans Hebrew', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}