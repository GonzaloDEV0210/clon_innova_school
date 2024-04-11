/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html", "./js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      height: {
        '950': '950px',
      },
    },
  },
  plugins: [],
}

