<template>
  <div class="growing-square" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.growing-square {
  width: fluid(50px, 200px, 480px, 720px);
  height: fluid(50px, 200px, 480px, 720px);

  @apply bg-box;
}
</style>
