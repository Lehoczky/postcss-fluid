// @ts-check

/**
 * @param {any} value
 * @returns {value is boolean}
 */
function isBoolean(value) {
  return (
    value === true || value === false || value.toString() === "[object Boolean]"
  )
}

/**
 * @param {number} number
 * @param {number} precision
 * @returns {number}
 */
function round(number, precision) {
  let pair = `${number}e`.split("e")
  const value = Math.round(
    /** @type {any} */ (`${pair[0]}e${+pair[1] + precision}`)
  )

  pair = `${value}e`.split("e")
  return +`${pair[0]}e${+pair[1] - precision}`
}

/**
 * @param {number} number
 * @param {number} precision
 */
function toREMWithFixedPrecision(number, precision = 3) {
  return round(number / 16, precision)
}

/**
 * @param {number} number
 */
function toPX(number) {
  return number * 16
}

module.exports = { isBoolean, round, toPX, toREMWithFixedPrecision }
