<template>
  <div class="overflow-hidden rounded-xl">
    <div class="flex gap-2 border-b border-base-400 bg-base-600 px-3 py-2">
      <div class="h-3 w-3 rounded-full bg-base-400" />
      <div class="h-3 w-3 rounded-full bg-base-400" />
      <div class="h-3 w-3 rounded-full bg-base-400" />
    </div>
    <div v-html="highlightedCode" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
})

const trimmedCode = computed(() => props.code.trim())
const highlightedCode = await useShikiji(trimmedCode)
</script>
