export function isBoolean(value: unknown): value is boolean {
  return (
    value === true ||
    value === false ||
    toString.call(value) === "[object Boolean]"
  )
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
