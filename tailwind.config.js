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
        '780': '780px',
        '450': '450px',
      },
      width: {
        '48.8%': '48.8%',
      }
    },
  },
  plugins: [],
}

