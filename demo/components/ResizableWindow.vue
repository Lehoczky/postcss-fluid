<template>
  <div
    ref="root"
    class="max-w-custom flex min-w-[10rem] resize-x flex-col overflow-x-auto rounded-xl sm:overflow-hidden"
    :style="{ maxWidth: maxWidthForCSS }"
  >
    <ResizableWindowHeader :sm="containerSm" />

    <div class="relative grid place-items-stretch">
      <ResizableWindowDimensions
        v-if="dimensionBoxShown"
        :width="width"
        :height="height"
        class="absolute right-0 top-px"
      />

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

const dimensionBoxShown = ref(false)
function showDimensionBox() {
  dimensionBoxShown.value = true
}
const hideDimensionBoxDebounced = useDebounceFn(
  () => (dimensionBoxShown.value = false),
  1500,
)
watchWithFirstUpdateSkipped(width, () => {
  showDimensionBox()
  hideDimensionBoxDebounced()
})
</script>
