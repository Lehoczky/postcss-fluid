// @ts-check
import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"
import eslintPluginAstro from "eslint-plugin-astro"

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...configLehoczkyVue({
    parserOptionsForTypeChecking: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  }),
  ...eslintPluginAstro.configs["flat/recommended"],
]
