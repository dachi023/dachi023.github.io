const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

const family = fontFamily.sans.join(",");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      // NOTE: https://coolors.co/palette/5465ff-788bff-9bb1ff-bfd7ff-e2fdff
      primary: "#5465ff",
      secondary: "#9bb1ff",
      accent: "#81b29a",
    },
    extend: {
      fontFamily: {
        sans: [`var(--font-noto-sans-jp),${family}`],
        pacifico: [`var(--font-pacifico),${family}`],
      },
    },
  },
  plugins: [],
};
