// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  env: {
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2017,
  },
  rules: {
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "simple-import-sort/imports": "warn",
  },
  overrides: [
    {
      files: ["*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.vue"],
      rules: {
        "no-undef": "off",
        "vue/html-self-closing": ["warn", { html: { void: "always" } }],
        "vue/no-v-html": "off",
      },
    },
  ],
})
