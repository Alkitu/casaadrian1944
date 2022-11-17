/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'casa-bistre': '#382923',
        'casa-eggshell': '#EDE6D3',
        'casa-light-gray': '#D6D6D6',
        'casa-dark-sienna': '#BC946D',
        'casa-camel': '#BC946D'
      }
    },
  },
  plugins: [],
}
