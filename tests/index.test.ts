import postcss from "postcss"
import { describe, expect, it } from "vitest"

// @ts-expect-error
import plugin from "../lib/index.js"
import type { Options } from "../lib/options.js"

async function run(input: string, output: string, opts: Options = {}) {
  const result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

async function runAndExpectToThrow(
  input: string,
  error: string | Error | RegExp
) {
  async function tryToRun() {
    await postcss([plugin()]).process(input, { from: undefined })
  }
  await expect(tryToRun).rejects.toThrowError(error)
}

async function runAndExpectToThrowWithOptions(
  input: string,
  opts: Options,
  error: string | Error | RegExp
) {
  async function tryToRun() {
    await postcss([plugin(opts)]).process(input, { from: undefined })
  }
  await expect(tryToRun).rejects.toThrowError(error)
}

describe("basic conversion", () => {
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
    await run(input, output)
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
    await run(input, output)
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
    await run(input, output)
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
    await run(input, output)
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
    await run(input, output)
  })
})

describe("alternative unit values", () => {
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
    await run(input, output)
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
    await run(input, output)
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
    await run(input, output)
  })

  it("works when the min value is 0 without a unit and the max is in px", async () => {
    const input = `
      a {
        font-size: fluid(0, 80px, 640px, 1920px)
      }
    `
    const output = `
      a {
        font-size: clamp(0px, -40px + 6.25vw, 80px)
      }
    `
    await run(input, output)
  })

  it("works when the min value is 0 without a unit and the max is in rem", async () => {
    const input = `
      a {
        font-size: fluid(0, 1.5rem, 40rem, 120rem)
      }
    `
    const output = `
      a {
        font-size: clamp(0rem, -0.75rem + 1.875vw, 1.5rem)
      }
    `
    await run(input, output)
  })

  it("works when the max value is 0 without a unit and the min is in rem", async () => {
    const input = `
      a {
        margin-top: fluid(-10rem, 0, 40rem, 120rem)
      }
    `
    const output = `
      a {
        margin-top: clamp(-10rem, -15rem + 12.5vw, 0rem)
      }
    `
    await run(input, output)
  })

  it("works when both values are 0 without a unit", async () => {
    // Don't know why anyone would do this, but it's better to support it
    // than giving and unrelated error
    const input = `
      a {
        font-size: fluid(0, 0, 40rem, 120rem)
      }
    `
    const output = `
      a {
        font-size: clamp(0rem, 0vw, 0rem)
      }
    `
    await run(input, output)
  })
})

describe("bad function declarations", () => {
  it("throws when missing an argument", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 640px)
      }
    `
    await runAndExpectToThrow(input, "expects 4 arguments, but got: 3")
  })

  it("throws when having too many arguments", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 640px, 1920px, 1920px)
      }
    `
    await runAndExpectToThrow(input, "expects 4 arguments, but got: 5")
  })

  it("throws when a argument's quantity is not a number", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, black, 1920px)
      }
    `
    await runAndExpectToThrow(input, "cannot be parsed")
  })

  it("throws when value argument units doesn't match", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 20px, 640px, 1920px)
      }
    `
    await runAndExpectToThrow(input, "Value units does not match")
  })

  it("throws when viewport argument units doesn't match", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 640px, 120rem)
      }
    `
    await runAndExpectToThrow(input, "Viewport units does not match")
  })

  it("throws when using an unsupported value unit", async () => {
    const input = `
      a {
        font-size: fluid(1em, 1.5em, 40rem, 120rem)
      }
    `
    await runAndExpectToThrow(input, `Unsupported unit: "em"`)
  })

  it("throws when using an unsupported viewport unit", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 80%, 100%)
      }
    `
    await runAndExpectToThrow(input, `Unsupported unit: "%"`)
  })
})

describe("plugin options", () => {
  it("works with number values", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem)
      }
    `
    const output = `
      a {
        font-size: clamp(1rem, 0.75rem + 0.625vw, 1.5rem)
      }
    `
    const options: Options = {
      min: 640,
      max: 1920,
    }
    await run(input, output, options)
  })

  it("works with pixel values", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem)
      }
    `
    const output = `
      a {
        font-size: clamp(1rem, 0.75rem + 0.625vw, 1.5rem)
      }
    `
    const options: Options = {
      min: "640px",
      max: "1920px",
    }
    await run(input, output, options)
  })

  it("works with rem values", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem)
      }
    `
    const output = `
      a {
        font-size: clamp(1rem, 0.75rem + 0.625vw, 1.5rem)
      }
    `
    const options: Options = {
      min: "40rem",
      max: "120rem",
    }
    await run(input, output, options)
  })

  it("works with locally declared viewport values", async () => {
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
    const options: Options = {
      min: "60rem",
      max: "90rem",
    }
    await run(input, output, options)
  })

  it("throws when only the min viewport is declared", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 40rem, 120rem)
      }
    `
    const options: Options = {
      min: 60,
    }
    await runAndExpectToThrowWithOptions(input, options, "max is missing")
  })

  it("throws when only the max viewport is declared", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 40rem, 120rem)
      }
    `
    const options: Options = {
      max: 90,
    }
    await runAndExpectToThrowWithOptions(input, options, "min is missing")
  })

  it("throws when min viewport is not declared with either px or rem", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 40rem, 120rem)
      }
    `
    const options: Options = {
      min: "60em",
      max: "90rem",
    }
    await runAndExpectToThrowWithOptions(
      input,
      options,
      `Unsupported unit: "em`
    )
  })

  it("throws when max viewport is not declared with either px or rem", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 40rem, 120rem)
      }
    `
    const options: Options = {
      min: "60rem",
      max: "90vw",
    }
    await runAndExpectToThrowWithOptions(
      input,
      options,
      `Unsupported unit: "vw`
    )
  })

  it("throws when min and max are in different units", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 40rem, 120rem)
      }
    `
    const options: Options = {
      min: "60rem",
      max: "1920px",
    }
    await runAndExpectToThrowWithOptions(
      input,
      options,
      "Viewport units does not match"
    )
  })

  it("throws when one of the options cannot be parsed as a dimension", async () => {
    const input = `
      a {
        font-size: fluid(1rem, 1.5rem, 40rem, 120rem)
      }
    `
    const options: Options = {
      min: "60rem",
      max: "relative",
    }
    await runAndExpectToThrowWithOptions(input, options, "Cannot parse")
  })
})
