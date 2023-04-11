<template>
  <div class="overflow-hidden rounded-xl">
    <div class="bg-base-600 border-base-400 flex gap-2 border-b px-3 py-2">
      <div class="bg-base-400 h-3 w-3 rounded-full" />
      <div class="bg-base-400 h-3 w-3 rounded-full" />
      <div class="bg-base-400 h-3 w-3 rounded-full" />
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

const highlightedCode = await useShiki(trimmedCode, { lang: "css" })
</script>
