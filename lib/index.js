// @ts-check
const valueParser = require("postcss-value-parser")
const { isBoolean, round, toPX, toREMWithFixedPrecision } = require("./utils")

/**
 * @param {string} value
 * @returns {boolean}
 */
function hasFluidFunction(value) {
  return value.includes("fluid(")
}

/**
 * @param {import('postcss-value-parser').FunctionNode} functionNode
 * @returns {import('postcss-value-parser').Dimension[]}
 */
function getParsedParameters(functionNode) {
  const params = functionNode.nodes
    .filter((node) => node.type === "word")
    .map((node) => node.value)
    .map((value) => valueParser.unit(value))

  if (params.length !== 4) {
    throw new Error("Function expects 4 parameters")
  }
  for (const param of params) {
    if (isBoolean(param)) {
      throw new Error(`Parameter "${param}"'s quantity cannot be parsed`)
    }
  }
  return /** @type {import('postcss-value-parser').Dimension[]} */ (params)
}

/**
 * @param {import('postcss-value-parser').Dimension[]} params
 * @returns {[number, number, number, number, string]}
 */
function getParameterValuesAndUnit([
  minValueDimension,
  maxValueDimension,
  minViewportDimension,
  maxViewportDimension,
]) {
  if (minValueDimension.unit !== maxValueDimension.unit) {
    throw new Error("Value units does not match")
  }
  if (minViewportDimension.unit !== maxViewportDimension.unit) {
    throw new Error("Viewport units does not match")
  }

  const allowedUnits = ["px", "rem"]
  if (!allowedUnits.includes(minValueDimension.unit)) {
    throw new Error(
      `Unsupported unit: "${minValueDimension.unit}". Please use "px" or "rem" instead`
    )
  }
  if (!allowedUnits.includes(minViewportDimension.unit)) {
    throw new Error(
      `Unsupported unit: "${minViewportDimension.unit}". Please use "px" or "rem" instead`
    )
  }

  const outputUnit = minValueDimension.unit
  const currentViewportUnit = minViewportDimension.unit

  const minValue = Number(minValueDimension.number)
  const maxValue = Number(maxValueDimension.number)
  let minViewport = Number(minViewportDimension.number)
  let maxViewport = Number(maxViewportDimension.number)

  if (outputUnit === "px" && currentViewportUnit === "rem") {
    minViewport = toPX(minViewport)
    maxViewport = toPX(maxViewport)
  } else if (outputUnit === "rem" && currentViewportUnit === "px") {
    minViewport = toREMWithFixedPrecision(minViewport)
    maxViewport = toREMWithFixedPrecision(maxViewport)
  }

  return [minValue, maxValue, minViewport, maxViewport, outputUnit]
}

/**
 * @param {number} [minValue]
 * @param {number} [maxValue]
 * @param {number} [minViewport]
 * @param {number} [maxViewport]
 * @param {string} [unit]
 * @returns {string}
 */
function getClamp(minValue, maxValue, minViewport, maxViewport, unit) {
  const valueDifference = maxValue - minValue
  const viewportDifference = maxViewport - minViewport
  const minInClamp = Math.min(minValue, maxValue)
  const maxInClamp = Math.max(minValue, maxValue)

  const factor = (1 / viewportDifference) * valueDifference
  const constantInCalc = round(minValue - minViewport * factor, 4)
  const showConstantPart = constantInCalc !== 0
  const viewWidthInCalc = round(100 * factor, 4)

  const calc = showConstantPart
    ? `${constantInCalc}${unit} + ${viewWidthInCalc}vw`
    : `${viewWidthInCalc}vw`
  return `clamp(${minInClamp}${unit}, ${calc}, ${maxInClamp}${unit})`
}

/**
 * @param {import('postcss-value-parser').FunctionNode} node
 */
function applyFluidFunction(node) {
  const func = node
  const parsedParameters = getParsedParameters(func)
  const parameterValuesAndUnit = getParameterValuesAndUnit(parsedParameters)
  const clamp = getClamp(...parameterValuesAndUnit)
  return valueParser(clamp).nodes[0]
}

/**
 * @param {import('postcss-value-parser').Node} node
 * @returns {node is import('postcss-value-parser').FunctionNode}
 */
function isFluidFunction(node) {
  return node.type === "function" && node.value === "fluid"
}

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: "postcss-fluid",
    Declaration(decl) {
      const { value } = decl
      if (!hasFluidFunction(value)) {
        return
      }

      const parsedValue = valueParser(value)
      const newNodes = parsedValue.nodes.map((node) => {
        return isFluidFunction(node) ? applyFluidFunction(node) : node
      })

      decl.value = valueParser.stringify(newNodes)
    },
  }
}

module.exports.postcss = true
