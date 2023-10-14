<template>
  <div class="fluid-border" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.fluid-border {
  width: 60px;
  height: 60px;
  border: fluid(10px, 22px, 480px, 720px) solid black;
  @apply bg-box;
}
</style>
