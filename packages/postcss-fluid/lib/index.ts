/* eslint-disable @typescript-eslint/no-throw-literal */
import type { Plugin } from "postcss"
import valueParser from "postcss-value-parser"

import {
  applyFluidFunction,
  hasFluidFunction,
  isFluidFunction,
} from "./function"
import type { Options } from "./options"
import { parseOptions } from "./options"

const pluginCreator = (opts: Options = {}): Plugin => {
  const options = parseOptions(opts)

  return {
    postcssPlugin: "postcss-fluid",
    Declaration(decl) {
      const { value } = decl
      if (!hasFluidFunction(value)) {
        return
      }

      const parsedValue = valueParser(value)
      const newNodes = parsedValue.nodes.map((node) => {
        try {
          return isFluidFunction(node)
            ? applyFluidFunction(node, options)
            : node
        } catch (error: any) {
          throw decl.error(error.message)
        }
      })

      decl.value = valueParser.stringify(newNodes)
    },
  }
}
pluginCreator.postcss = true

export = pluginCreator
