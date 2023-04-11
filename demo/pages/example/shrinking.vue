<template>
  <div class="shrinking-square" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.shrinking-square {
  width: fluid(200px, 40px, 480px, 720px);
  height: fluid(200px, 40px, 480px, 720px);
  @apply bg-box;
}
</style>
