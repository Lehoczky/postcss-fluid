<template>
  <section
    class="my-8 rounded-xl bg-base-700 bg-opacity-40 p-4 sm:my-12 sm:p-6"
  >
    <h2>
      <slot name="heading" />
    </h2>

    <div class="relative mb-12">
      <ResizableWindow @width-change="frameWidth = $event">
        <slot />
      </ResizableWindow>
    </div>

    <CodeBlock :code="code" />
  </section>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    required: true,
  },
})

const frameWidth = ref(Infinity)
</script>
