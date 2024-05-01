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
        '1': '1px',
      },
      width: {
        '48.8%': '48.8%',
        '450': '450px',
        '920': '920px',
        '350': '350px',
      }
    },
  },
  plugins: [],
}

