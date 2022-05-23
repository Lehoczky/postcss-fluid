const postcss = require("postcss")
const plugin = require("../lib/index.js")

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it("converts a single value", async () => {
  const input = `
    a {
      font-size: fluid(1rem, 1.5rem, 40rem, 120rem)
    }
  `
  const output = `
    a {
      font-size: clamp(1rem, 0.75rem + 0.625vw, 1.5rem)
    }
  `
  await run(input, output, {})
})

it("rounds the numbers", async () => {
  const input = `
    a {
      font-size: fluid(1rem, 2rem, 50rem, 120rem)
    }
  `
  const output = `
    a {
      font-size: clamp(1rem, 0.2857rem + 1.4286vw, 2rem)
    }
  `
  await run(input, output, {})
})

it("does not create addition when the constant part is 0", async () => {
  const input = `
    a {
      font-size: fluid(4rem, 8rem, 60rem, 120rem)
    }
  `
  const output = `
    a {
      font-size: clamp(4rem, 6.6667vw, 8rem)
    }
  `
  await run(input, output, {})
})

it("does nothing when the function isn't present", async () => {
  const input = `
    a {
      font-size: 1rem
    }
  `
  const output = `
    a {
      font-size: 1rem
    }
  `
  await run(input, output, {})
})

it("converts only the fluid part of a value", async () => {
  const input = `
    a {
      margin: 1rem fluid(1rem, 1.5rem, 40rem, 120rem) 2rem
    }
  `
  const output = `
    a {
      margin: 1rem clamp(1rem, 0.75rem + 0.625vw, 1.5rem) 2rem
    }
  `
  await run(input, output, {})
})

it("works with pixels too", async () => {
  const input = `
    a {
      font-size: fluid(16px, 24px, 640px, 1920px)
    }
  `
  const output = `
    a {
      font-size: clamp(16px, 12px + 0.625vw, 24px)
    }
  `
  await run(input, output, {})
})

it("works with pixel values and rem viewport widths", async () => {
  const input = `
    a {
      font-size: fluid(16px, 24px, 40rem, 120rem)
    }
  `
  const output = `
    a {
      font-size: clamp(16px, 12px + 0.625vw, 24px)
    }
  `
  await run(input, output, {})
})

it("works with rem values and pixel viewport widths", async () => {
  const input = `
    a {
      font-size: fluid(1rem, 1.5rem, 640px, 1920px)
    }
  `
  const output = `
    a {
      font-size: clamp(1rem, 0.75rem + 0.625vw, 1.5rem)
    }
  `
  await run(input, output, {})
})
