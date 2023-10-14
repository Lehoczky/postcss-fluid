<template>
  <p class="typography">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas vero eaque
    iste sapiente, asperiores non quaerat unde animi pariatur dignissimos sunt
    ex culpa eveniet temporibus odit et ducimus placeat soluta. Autem nihil
    molestiae esse quibusdam rem! Reiciendis quaerat nobis, dolor corporis
    repellat odit ipsam incidunt corrupti provident ducimus sunt ab.
  </p>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "frame-content",
})
</script>

<style scoped>
.typography {
  font-size: fluid(16px, 28px, 480px, 720px);
  line-height: fluid(26px, 38px, 480px, 720px);
  letter-spacing: fluid(0, 0.6px, 480px, 720px);
}
</style>
