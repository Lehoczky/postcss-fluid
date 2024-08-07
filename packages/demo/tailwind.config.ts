import type { Config } from "tailwindcss"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
