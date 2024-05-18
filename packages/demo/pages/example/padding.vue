<template>
  <div class="padded-box">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore
    voluptatibus, ex nisi dolorum, veritatis quia sint voluptates distinctio
    odio quis, natus qui dicta corporis autem neque harum? Assumenda,
    voluptatum.
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.padded-box {
  padding: fluid(4px, 40px, 480px, 720px);
  @apply bg-box;
}
</style>
