import type { Dimension } from "postcss-value-parser"

export function isBoolean(value: unknown): value is boolean {
  return (
    value === true ||
    value === false ||
    toString.call(value) === "[object Boolean]"
  )
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" || toString.call(value) === "[object Number]"
}

export function round(number: number, precision: number) {
  let pair = `${number}e`.split("e")
  const value = Math.round(`${pair[0]}e${+pair[1] + precision}` as any)

  pair = `${value}e`.split("e")
  return +`${pair[0]}e${+pair[1] - precision}`
}

export function toREMWithFixedPrecision(number: number, precision = 3) {
  return round(number / 16, precision)
}

export function toPX(number: number) {
  return number * 16
}

const ALLOWED_UNITS = ["px", "rem"]

export function checkWhetherUnitIsAllowed({ unit }: Dimension): void {
  if (!ALLOWED_UNITS.includes(unit)) {
    throw new Error(
      `Unsupported unit: "${unit}". Please use "px" or "rem" instead`,
    )
  }
}

export function isZeroWithoutUnit(dimension: Dimension) {
  return dimension.number === "0" && !dimension.unit
}

export function unitsNotMatch(dimension1: Dimension, dimension2: Dimension) {
  return dimension1.unit !== dimension2.unit
}
