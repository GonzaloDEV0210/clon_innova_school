/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
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
        '940': '940px',
      },
      width: {
        '48.8%': '48.8%',
        '450': '450px',
        '920': '920px',
        '350': '350px',
        '250': '250px',
        '1400':'1400px',
        '1100': '1100px',
        '770': '770px',
        '490': '490px',
        '600': '600px',
        '1000': '1000px',
        '1230': '1230px',
        '1260': '1260px',
        '1300': '1300px'
      },
      fontSize: {
        '8': '8px',
      }
    },
  },
  plugins: [],
}

