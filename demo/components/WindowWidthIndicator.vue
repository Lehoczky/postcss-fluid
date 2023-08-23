<template>
  <div
    class="bg-base-300 absolute -bottom-3 z-10 flex h-6 w-0.5 justify-center rounded-full"
    :style="style"
  >
    <div class="translate-y-7 text-sm">{{ position }}px</div>
  </div>
</template>

<script setup lang="ts">
import { StyleValue } from "vue"

const props = defineProps({
  position: {
    type: Number,
    required: true,
  },
})

const style = computed<StyleValue>(() => ({
  left: `${props.position}px`,
}))
</script>
