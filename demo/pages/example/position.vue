<template>
  <div class="relative h-12 w-full">
    <div class="positioned-box" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.positioned-box {
  position: absolute;
  top: fluid(0, 80px, 480px, 720px);
  left: fluid(0, 80px, 480px, 720px);
  width: 40px;
  min-height: 40px;
  @apply bg-box;
}
</style>
