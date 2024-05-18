import type { Dimension } from "postcss-value-parser"

import { toPX, toREMWithFixedPrecision } from "./utils"

class BaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}

export class DimensionUnitsNotMatchError extends BaseError {
  constructor(type: string, dimension1: Dimension, dimension2: Dimension) {
    const value1 = dimensionToString(dimension1)
    const value2 = dimensionToString(dimension2)
    const advisedValue1 = getAdvisedValue(dimension1)
    const advisedValue2 = getAdvisedValue(dimension2)
    const showConversionAdvice = advisedValue1 && advisedValue2
    const advice = showConversionAdvice
      ? `\nTry changing ${value1} to ${advisedValue1} or ${value2} to ${advisedValue2}`
      : ""
    const prefix = type ? `${type} units` : "Units"

    const message = `${prefix} do not match for ${value1} and ${value2}${advice}.`
    super(message)
  }
}

export class OptionViewportUnitNotMatchError extends BaseError {
  constructor(dimension1: Dimension, dimension2: Dimension) {
    const unit1 = dimension1.unit
    const unit2 = dimension2.unit
    const message = `Viewport units do not match in the plugin options. One of them is ${unit1} and the other is ${unit2}`
    super(message)
  }
}

function dimensionToString({ number, unit }: Dimension) {
  return number + unit
}

function getAdvisedValue({ number, unit }: Dimension) {
  if (unit === "px") {
    return dimensionToString({
      number: String(toREMWithFixedPrecision(Number(number))),
      unit: "rem",
    })
  }
  if (unit === "rem") {
    return dimensionToString({
      number: String(toPX(Number(number))),
      unit: "px",
    })
  }
  return undefined
}
