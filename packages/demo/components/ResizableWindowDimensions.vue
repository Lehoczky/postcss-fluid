<template>
  <div class="bg-white bg-opacity-60 p-1 text-xs leading-none text-base-700">
    {{ dimension }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
})

const widthRounded = useRound(() => props.width)
const heightRounded = useRound(() => props.height)
const dimension = computed(() => {
  return `${widthRounded.value}px × ${heightRounded.value}px`
})
</script>
