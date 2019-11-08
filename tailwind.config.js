const {
  colors: { teal, orange, pink, purple, indigo, ...colors }
} = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: colors,
    extend: {
      colors: {
        coldblue: {
          100: "#ECEEF1",
          200: "#CFD5DC",
          300: "#B2BCC7",
          400: "#79899E",
          500: "#3F5774",
          600: "#394E68",
          700: "#263446",
          800: "#1C2734",
          900: "#131A23"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
