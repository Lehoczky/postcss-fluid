import valueParser, {
  type Dimension,
  type FunctionNode,
  type Node,
} from "postcss-value-parser"

import { ParsedOptions } from "./options"
import {
  checkWhetherUnitIsAllowed,
  isBoolean,
  round,
  toPX,
  toREMWithFixedPrecision,
} from "./utils"

export function hasFluidFunction(value: string) {
  return value.includes("fluid(")
}

export function applyFluidFunction(node: FunctionNode, options: ParsedOptions) {
  const func = node
  const parsedArguments = getParsedArguments(func, options)
  const argumentValuesAndUnit = getArgumentValuesAndUnit(parsedArguments)
  const clamp = getClamp(...argumentValuesAndUnit)
  return valueParser(clamp).nodes[0]
}

function getParsedArguments(
  functionNode: FunctionNode,
  options: ParsedOptions
): Dimension[] {
  const rawArgs = functionNode.nodes
    .filter((node) => node.type === "word")
    .map((node) => node.value)
  let args = rawArgs.map((value) => valueParser.unit(value))

  if (args.length === 2 && options) {
    args = [...args, options.min, options.max]
  }

  if (args.length !== 4) {
    throw new Error(`Function expects 4 arguments, but got: ${args.length}`)
  }
  args.forEach((argument, i) => {
    if (isBoolean(argument)) {
      const originalArg = rawArgs[i]
      throw new Error(`Argument "${originalArg}"'s quantity cannot be parsed`)
    }
  })
  return args as Dimension[]
}

function getArgumentValuesAndUnit([
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

  checkWhetherUnitIsAllowed(minValueDimension)
  checkWhetherUnitIsAllowed(minViewportDimension)

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