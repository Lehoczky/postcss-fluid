import { WatchCallback, WatchOptions, WatchSource } from "vue"

export function watchWithFirstUpdateSkipped<T>(
  source: WatchSource<T>,
  callback: WatchCallback<T>,
  options?: WatchOptions,
) {
  const isFirstUpdate = ref(true)
  const wrappedCallback: typeof callback = (value, oldValue, onCleanup) => {
    if (isFirstUpdate.value) {
      isFirstUpdate.value = false
      return
    }
    callback(value, oldValue, onCleanup)
  }

  return watch(source, wrappedCallback, options)
}
