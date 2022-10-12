/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      black: "#000000",
      cyan: "#61DAFB",
      "grey-900": "#202024",
      "grey-800": "#3E3E3E",
      "grey-600": "#B9B9B9",
      "grey-400": "#D9D9D9",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
