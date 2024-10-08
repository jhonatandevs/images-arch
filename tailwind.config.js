/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': '0.6rem',
    },
    extend: {
      minHeight: {
        '4016': '40rem',
      },
    },
  },
  plugins: []
}

