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
      },

      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        raisone: ["Raisonne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
        "3xl": "1620px",
      },
    },
  },
  plugins: [],
};
