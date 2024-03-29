/* eslint-disable @typescript-eslint/naming-convention */

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  app: {
    baseURL: "/postcss-fluid/",
    head: {
      title: "PostCSS Fluid Demo",
      htmlAttrs: {
        lang: "en-US",
      },
      meta: [
        {
          name: "description",
          content: "Demo site for the @lehoczky/postcss-fluid plugin.",
        },
        {
          name: "keywords",
          content: "PostCSS, Fluid Typography, CSS, Viewport Units",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/postcss-fluid/favicon.svg",
          type: "image/svg+xml",
        },
      ],
      bodyAttrs: {
        class: "bg-base-800 font-sans text-base-300",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      "postcss-preset-env": {},
      autoprefixer: {},
      "@lehoczky/postcss-fluid": {},
    },
  },
  modules: ["@vueuse/nuxt"],
  routeRules: {
    "/example/**": {
      experimentalNoScripts: true,
    },
  },
  nitro: {
    preset: "github-pages",
  },
})
