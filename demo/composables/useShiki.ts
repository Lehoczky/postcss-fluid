import type { Ref } from "vue"
import { ref } from "vue"

export const useShiki = async (code: Ref<string>, hlOptions = {}) => {
  const codeToHtml = ref(() => code.value)

  const init = async () => {
    const { getHighlighter } = await import("shiki-es")
    const highlighter = await getHighlighter({
      langs: ["css"],
      theme: "one-dark-pro",
    })
    codeToHtml.value = () => highlighter.codeToHtml(code.value, hlOptions)
  }

  if (process.server) {
    await init()
  } else if (import.meta.env.DEV) {
    // We don't want to initialize Shiki in production,
    // because the code blocks are already generated before deployment.
    init()
  }
  return computed(() => codeToHtml.value())
}
