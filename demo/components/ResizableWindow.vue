<template>
  <div
    ref="root"
    class="max-w-custom flex resize-x flex-col overflow-x-auto rounded-xl sm:overflow-hidden"
    :style="{ maxWidth: maxWidthForCSS }"
  >
    <div
      class="bg-base-400 flex items-center justify-between gap-4 px-6 py-4"
      :class="{ 'sm:gap-8': containerSm }"
    >
      <div class="flex gap-2">
        <div class="h-3.5 w-3.5 rounded-full bg-red-400" />
        <div class="h-3.5 w-3.5 rounded-full bg-yellow-400" />
        <div class="h-3.5 w-3.5 rounded-full bg-green-400" />
      </div>

      <div
        class="bg-base-500 text-base-300 flex max-w-md flex-1 items-center justify-center gap-1 overflow-hidden rounded-md px-2 py-1.5 text-opacity-75"
        :class="{ 'sm:px-4': containerSm }"
      >
        <IconLockClosed />
        <span class="overflow-hidden text-ellipsis whitespace-nowrap text-sm"
          >awesome-site.com</span
        >
      </div>

      <IconHamburgerMenu class="hidden" :class="{ 'sm:block': containerSm }" />
    </div>

    <div class="relative grid place-items-stretch">
      <div
        v-if="dimensionBoxShown"
        class="text-base-700 absolute right-0 top-px bg-white bg-opacity-60 p-1 text-xs leading-none"
      >
        {{ dimension }}
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const MAX_WIDTH_ON_DESKTOP = 896

const root = ref<HTMLElement>()
const { width, height } = useElementSize(root, {
  width: MAX_WIDTH_ON_DESKTOP,
  height: 0,
})

// Could use container queries, but browser support is not that good yet
const containerSm = computed(() => width.value >= 600)
const maxWidthForCSS = computed(() => `${MAX_WIDTH_ON_DESKTOP}px`)

const widthRounded = useRound(width)
const heightRounded = useRound(height)
const dimension = computed(() => {
  return `${widthRounded.value}px × ${heightRounded.value}px`
})

const dimensionBoxShown = ref(false)
function showDimensionBox() {
  dimensionBoxShown.value = true
}
const hideDimensionBoxDebounced = useDebounceFn(
  () => (dimensionBoxShown.value = false),
  1500,
)
watchWithFirstUpdateSkipped(dimension, () => {
  showDimensionBox()
  hideDimensionBoxDebounced()
})
</script>
