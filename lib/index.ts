import type { Plugin } from "postcss"
import valueParser from "postcss-value-parser"

import {
  applyFluidFunction,
  hasFluidFunction,
  isFluidFunction,
} from "./function"

const pluginCreator = (): Plugin => {
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
pluginCreator.postcss = true

module.exports = pluginCreator
