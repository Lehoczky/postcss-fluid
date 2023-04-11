<template>
  <section class="bg-base-700 my-8 rounded-xl bg-opacity-40 p-6 sm:my-12">
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
