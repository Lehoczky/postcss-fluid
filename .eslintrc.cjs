// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  root: true,
  extends: ["@lehoczky/eslint-config-vue"],
  rules: {
    "vue/no-static-inline-styles": "off",
    "vue/no-v-html": "off",
  },
})
