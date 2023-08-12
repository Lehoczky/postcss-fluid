<template>
  <section
    class="bg-base-700 my-8 rounded-xl bg-opacity-40 p-4 sm:my-12 sm:p-6"
  >
    <h2>
      <slot name="heading" />
    </h2>

    <ResizableWindow class="mb-8">
      <slot />
    </ResizableWindow>

    <div>
      <CodeBlock :code="code" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    required: true,
  },
})
</script>
