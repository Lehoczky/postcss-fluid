# postcss-fluid

[![NPM version](https://img.shields.io/npm/v/@lehoczky/postcss-fluid.svg)](https://www.npmjs.com/package/@lehoczky/postcss-fluid)
![test status](https://github.com/lehoczky/postcss-fluid/workflows/Test/badge.svg)
![formatted with prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

[PostCSS](https://github.com/postcss/postcss) plugin for using fluid values in css.

```css
.fluid-typography {
  font-size: fluid(1rem, 1.25rem, 40rem, 120rem);
}
```

```css
.fluid-typography {
  font-size: clamp(1rem, 0.875rem + 0.3125vw, 1.25rem);
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss @lehoczky/postcss-fluid
```

**Step 2:** Check you project for existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('@lehoczky/postcss-fluid'),
    require('autoprefixer')
  ]
}
```
