module.exports = {
  purge: ["./src/**/*.{ts, tsx, scss, css}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: "#acb0ac",
          DEFAULT: "#d7d9d7",
          light: "#e7e9e7",
        },
        black: {
          dark: "#0b0c0b",
          DEFAULT: "#292a29",
          light: "#4f504f",
        },
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover", "disabled"],
      cursor: ["hover", "disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
