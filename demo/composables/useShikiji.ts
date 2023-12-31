import type { Ref } from "vue"
import { ref } from "vue"

export const useShikiji = async (code: Ref<string>) => {
  const codeToHtml = ref(() => code.value)

  const init = async () => {
    const { getHighlighter } = await import("shikiji")
    const highlighter = await getHighlighter({
      langs: ["css"],
      themes: ["one-dark-pro"],
    })
    codeToHtml.value = () =>
      highlighter.codeToHtml(code.value, {
        lang: "css",
        theme: "one-dark-pro",
      })
  }

  if (process.server) {
    await init()
  } else if (import.meta.env.DEV) {
    // We don't want to initialize Shikiji in production,
    // because the code blocks are already generated before deployment.
    init()
  }
  return computed(() => codeToHtml.value())
}
