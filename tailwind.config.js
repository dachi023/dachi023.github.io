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
    extend: {
      fontFamily: {
        sans: [`var(--font-noto-sans-jp),${family}`],
        pacifico: [`var(--font-pacifico),${family}`],
      },
    },
  },
  plugins: [],
};
