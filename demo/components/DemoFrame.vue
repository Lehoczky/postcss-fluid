<template>
  <iframe class="max-w-full" :src="srcWithBasePath" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const srcWithBasePath = computed(() => {
  return `/postcss-fluid${props.src}`
})
</script>
