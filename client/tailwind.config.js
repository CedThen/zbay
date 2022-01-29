const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        red: colors.rose
      }
    },
  },
  plugins: [],
}
