import type { Config } from "tailwindcss"

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
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
      scale: {
        65: ".65",
      },
    },
  },
  plugins: [],
} satisfies Config
