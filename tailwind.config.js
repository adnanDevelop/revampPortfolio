/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightWhite: "#f6f3fc",
        primary: "#8750f7",
        secondary: "#2a1454",
        darkBlack: "#140c1c",
        gray: "#d9d9d9",
        purple: "#814cec",
      },
      boxShadow: {
        "custom-light": "0px 0.5px 10px rgba(0, 0, 0, 0.08)",
        purple: "0px 0px 3px rgba(135, 80, 247, 0.1)",
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
  plugins: [],
};
