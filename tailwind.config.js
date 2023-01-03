/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        alata: 'Alata, sans-serif',
        josefin: ['"Josefin Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
