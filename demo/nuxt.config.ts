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
        class: "bg-base-800 font-poppins text-base-300",
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
  modules: ["@vueuse/nuxt", "@nuxtjs/google-fonts"],
  routeRules: {
    "/example/**": {
      experimentalNoScripts: true,
    },
  },
  googleFonts: {
    preload: true,
    download: false,
    families: {
      Poppins: {
        wght: [400, 500],
      },
    },
  },
  nitro: {
    preset: "github-pages",
  },
})
