import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://lehoczky.github.io",
  base: "postcss-fluid",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  devToolbar: {
    enabled: false,
  },
})
