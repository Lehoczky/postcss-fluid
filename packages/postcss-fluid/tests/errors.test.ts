import type { Dimension } from "postcss-value-parser"
import { describe, expect, it } from "vitest"

import {
  DimensionUnitsNotMatchError,
  OptionViewportUnitNotMatchError,
} from "../lib/errors"

describe("DimensionUnitsNotMatchError", () => {
  it("Works without type", () => {
    const pxDimension: Dimension = { number: "32", unit: "px" }
    const remDimension: Dimension = { number: "1", unit: "rem" }
    const error = new DimensionUnitsNotMatchError("", pxDimension, remDimension)

    expect(error.message).toMatch("Units do not match")
  })

  it("Works with type", () => {
    const pxDimension: Dimension = { number: "32", unit: "px" }
    const remDimension: Dimension = { number: "1", unit: "rem" }
    const error = new DimensionUnitsNotMatchError(
      "Value",
      pxDimension,
      remDimension,
    )

    expect(error.message).toMatch("Value units do not match")
  })

  it("Can show advice for px and rem dimensions", () => {
    const pxDimension: Dimension = { number: "32", unit: "px" }
    const remDimension: Dimension = { number: "1", unit: "rem" }
    const error = new DimensionUnitsNotMatchError("", pxDimension, remDimension)

    expect(error.message).toEqual(
      "Units do not match for 32px and 1rem\nTry changing 32px to 2rem or 1rem to 16px.",
    )
  })

  it("Doesn't show advice if first dimension isn't px or rem", () => {
    const pxDimension: Dimension = { number: "32", unit: "vw" }
    const remDimension: Dimension = { number: "1", unit: "rem" }
    const error = new DimensionUnitsNotMatchError("", pxDimension, remDimension)

    expect(error.message).toEqual("Units do not match for 32vw and 1rem.")
  })

  it("Doesn't show advice if second dimension isn't px or rem", () => {
    const pxDimension: Dimension = { number: "32", unit: "px" }
    const remDimension: Dimension = { number: "1", unit: "vw" }
    const error = new DimensionUnitsNotMatchError("", pxDimension, remDimension)

    expect(error.message).toEqual("Units do not match for 32px and 1vw.")
  })
})

describe("OptionViewportUnitNotMatchError", () => {
  it("Shows the right units in it's message", () => {
    const pxDimension: Dimension = { number: "32", unit: "px" }
    const remDimension: Dimension = { number: "1", unit: "rem" }
    const error = new OptionViewportUnitNotMatchError(pxDimension, remDimension)

    expect(error.message).toEqual(
      "Viewport units do not match in the plugin options. One of them is px and the other is rem",
    )
  })
})
