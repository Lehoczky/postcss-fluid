// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  head: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500display=swap",
      },
    ],
  },
  css: ["@/assets/css/main.css"],
  app: {
    baseURL: "/postcss-fluid/",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "@lehoczky/postcss-fluid": {},
    },
  },
  experimental: {
    noScripts: true,
  },
})
