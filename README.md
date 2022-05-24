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

## Setup

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

## Usage

The function takes 4 parameters: `min value`, `max value`, `min viewport width`, `max viewport width`.

```css
.foo {
  margin: fluid(1rem, 2rem, 40rem, 120rem);
}
```

```css
.foo {
  margin: clamp(1rem, 0.5rem + 1.25vw, 2rem);
}
```

The values can be **pixels** too, in this case the output will use pixels as well:

```css
.foo {
  margin: fluid(16px, 32px, 640px, 1920px);
}
```

```css
.foo {
  margin: clamp(16px, 8px + 1.25vw, 32px);
}
```

you can even mix the two examples above and use **pixels** for the **values** and **rem** for the **viewport width** or vice versa:

```css
.foo {
  margin: fluid(1rem, 2rem, 640px, 1920px);
  letter-spacing: fluid(1px, 2px, 40rem, 120rem);
}
```

```css
.foo {
  /* Notice that the output uses the same unit that's given the value parameters */
  margin: clamp(1rem, 0.5rem + 1.25vw, 2rem);
  letter-spacing: clamp(1px, 0.5px + 0.0781vw, 2px);
}
```

however don't try to mix units for the values or the viewports. The following won't work:

```css
.foo {
  margin: fluid(1rem, 10px, 640px, 1920px);
}
```

The function can only be called with `px` and `rem` units. `%`, `vh`, `dpi`, etc. are not supported.

## Options

It's possible to set a default `min` and `max` viewport width in the plugin options.

```js
plugins: [
  require("@lehoczky/postcss-fluid")({ min: "40rem", max: "120rem" }),
  ...
],
```

Now you can call the `fluid` function with only 2 parameters:

```css
.foo {
  /* same as fluid(1rem, 2rem, 40rem, 120rem) */
  margin: fluid(1rem, 2rem);

  /* Calling with all 4 parameters overrides the globally set options */
  padding: fluid(1rem, 2rem, 60rem, 80rem);
}
```

The values can be given as numbers (number of pixels), or as strings with either `rem` or `px` units. The following options are all valid:

```js
require("@lehoczky/postcss-fluid")({
  min: "640px",
  max: "1920px",
})

require("@lehoczky/postcss-fluid")({
  min: "40rem",
  max: "120rem",
})

require("@lehoczky/postcss-fluid")({
  // same as "640px" and "1920px"
  min: 640,
  max: 1920,
})
```
