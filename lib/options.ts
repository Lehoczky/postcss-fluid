import valueParser, { type Dimension } from "postcss-value-parser"

import { checkWhetherUnitIsAllowed, isNumber } from "./utils"

export type Options = {
  min?: number | string
  max?: number | string
}

export type ParsedOptions = { min: Dimension; max: Dimension } | undefined

export function parseOptions(options: Options): ParsedOptions {
  if (!options.min && !options.max) {
    return undefined
  }
  if (!options.min) {
    throw new Error(
      "You have to define both min and max values for defaults to work, but min is missing."
    )
  }
  if (!options.max) {
    throw new Error(
      "You have to define both min and max values for defaults to work, but max is missing."
    )
  }

  const { min, max } = options as Required<Options>
  const parsedMin = isNumber(min) ? toPixelDimension(min) : parseDimension(min)
  const parsedMax = isNumber(max) ? toPixelDimension(max) : parseDimension(max)

  if (parsedMin.unit !== parsedMax.unit) {
    throw new Error("Viewport units does not match in the plugin options")
  }

  return {
    min: parsedMin,
    max: parsedMax,
  }
}

function parseDimension(value: string) {
  const dimension = valueParser.unit(value)
  if (dimension === false) {
    throw new Error(`Cannot parse the given value as viewport width: ${value}`)
  }
  checkWhetherUnitIsAllowed(dimension)
  return dimension
}

function toPixelDimension(value: number): Dimension {
  return {
    number: String(value),
    unit: "px",
  }
}
