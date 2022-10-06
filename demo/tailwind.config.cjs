/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        base: {
          300: "#cbcac8",
          400: "#3b404d",
          500: "#2e323b",
          600: "#282c34",
          700: "#21252b",
          800: "#1b1f23",
        },
        box: "#064e3b",
      },
    },
  },
  plugins: [],
}
