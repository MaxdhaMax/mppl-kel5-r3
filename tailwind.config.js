/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#101019',
        'background-abu' : '#32314C',
        'tulisan' : '#9695E5',
        'tulisan-light' : '#7574B2',
      }
    },
  },
  plugins: [],
}
