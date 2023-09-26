/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      colors: {
      "white": "#F1F1F1",
      "gray": "#BBC6C9",
      "cyan": "#267A7A",
      "orange": "#FF8B3F",
      "blue": "#4B4BEB",
      "black": "#22272E",
      }
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

