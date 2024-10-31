import config from "@lehoczky/prettier-config"

/**
 * @type {import("prettier").Options & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  ...config,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./packages/demo/tailwind.config.ts",
  tailwindFunctions: ["cn"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
