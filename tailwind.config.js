/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");

// const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // white: "#fff",
        // lightWhite: "#f6f3fc",
        // primary: "#8750f7",
        // secondary: "#2a1454",
        // darkBlack: "#140c1c",
        // gray: "#d9d9d9",
        // purple: "#814cec",
        white: "#fff",
        lightWhite: "#f6f3fc",
        primary: "#08d665",
        secondary: "#2fbf71",
        // secondary: "#22cd6f",
        // darkBlack: "#0B0D0E",
        darkBlack: "#0B0D0E",
        gray: "#d9d9d9",
        purple: "#814cec",
        content: "#DDD",
      },
      boxShadow: {
        "custom-light": "0px 0.5px 10px rgba(0, 0, 0, 0.08)",
        green: "0px 0px 20px rgba(47, 191, 113, 0.1)",
      },

      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        stylish: ["WindSong", "cursive"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1030px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1620px",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
