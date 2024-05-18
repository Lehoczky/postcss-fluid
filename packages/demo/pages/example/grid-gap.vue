<template>
  <div class="flex">
    <div class="fluid-grid-gap">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.fluid-grid-gap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 480px, 720px);
}

.fluid-grid-gap > * {
  width: 60px;
  height: 60px;
  @apply bg-box;
}
</style>
