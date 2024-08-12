/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'blue': '#3657CB',
        'yellow': '#F2F60F',
        'green': '#89CB36',
        'red': '#CB3F36',
        'gray': '#6D7692',
        'light-black': '#151A26',
        'right-blue': '#1B2133',
        'hero': '#1E2538',
        'blue-odd': '#1D3AA0',
      },
      boxShadow: {
        'nav-btn': '0px 0px 15px 0px #4871FFCC'
      },
      fontSize: {
        65: '65px',
        45: '45px',
      },
      maxWidth: {
        1400: '1400px'
      }
    },
  },
  plugins: [],
}