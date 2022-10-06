<template>
  <div v-html="highlightedCode" />
</template>

<script setup>
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
})

const trimmedCode = computed(() => props.code.trim())

const highlightedCode = await useShiki(trimmedCode, { lang: "css" })
</script>
