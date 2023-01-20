/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '560px',
        xxs: '460px',
        exs: '350px'
      },
      colors: {
        primary: {
          back: "#f8f8f8"
        }
      },
      fontFamily: {
        'primary': ['Poppins', 'ui-sans-serif']
      }
    },
  },
  plugins: [],
}
