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
    animation:{
      'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
    },
    keyframes: {
      'shake' : {
          '10%, 90%': {
              transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%' : {
              transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
              transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
              transform: 'translate3d(4px, 0, 0)'
          }
                }
              }
  },
  plugins: [],
}

