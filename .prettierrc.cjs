/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "auto",
  printWidth: 80,
  semi: false,
  plugins: [require("prettier-plugin-tailwindcss")],
}
