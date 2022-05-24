import valueParser, {
  type Dimension,
  type FunctionNode,
  type Node,
} from "postcss-value-parser"

import { isBoolean, round, toPX, toREMWithFixedPrecision } from "./utils"

export function hasFluidFunction(value: string) {
  return value.includes("fluid(")
}

export function applyFluidFunction(node: FunctionNode) {
  const func = node
  const parsedParameters = getParsedParameters(func)
  const parameterValuesAndUnit = getParameterValuesAndUnit(parsedParameters)
  const clamp = getClamp(...parameterValuesAndUnit)
  return valueParser(clamp).nodes[0]
}

function getParsedParameters(functionNode: FunctionNode): Dimension[] {
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
  return params as Dimension[]
}

function getParameterValuesAndUnit([
  minValueDimension,
  maxValueDimension,
  minViewportDimension,
  maxViewportDimension,
]: Dimension[]): [number, number, number, number, string] {
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

function getClamp(
  minValue: number,
  maxValue: number,
  minViewport: number,
  maxViewport: number,
  unit: string
) {
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

export function isFluidFunction(node: Node): node is FunctionNode {
  return node.type === "function" && node.value === "fluid"
}
