<template>
  <div class="box-to-circle" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.box-to-circle {
  width: 100px;
  height: 100px;
  border-radius: fluid(0, 50px, 480px, 720px);
  @apply bg-box;
}
</style>
