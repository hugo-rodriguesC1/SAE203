const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        "barlow": "Barlow"
      },
    },

  },
  plugins: [],
})
