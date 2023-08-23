<template>
  <section
    class="bg-base-700 my-8 rounded-xl bg-opacity-40 p-4 sm:my-12 sm:p-6"
  >
    <h2>
      <slot name="heading" />
    </h2>

    <div class="relative mb-12">
      <ResizableWindow>
        <slot />
      </ResizableWindow>

      <WindowWidthIndicator :position="480" />
      <WindowWidthIndicator :position="720" />
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
</script>
