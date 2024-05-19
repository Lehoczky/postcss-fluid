<template>
  <div
    class="flex items-center justify-between gap-4 bg-base-400 px-6 py-4"
    :class="{ 'sm:gap-8': sm }"
  >
    <div class="flex gap-2">
      <div class="h-3.5 w-3.5 rounded-full bg-red-400" />
      <div class="h-3.5 w-3.5 rounded-full bg-yellow-400" />
      <div class="h-3.5 w-3.5 rounded-full bg-green-400" />
    </div>

    <div
      class="flex max-w-md flex-1 items-center justify-center gap-1 overflow-hidden rounded-md bg-base-500 px-2 py-1.5 text-base-300 text-opacity-75"
      :class="{ 'sm:px-4': sm }"
    >
      <IconLockClosed class="shrink-0" />
      <span class="overflow-hidden text-ellipsis whitespace-nowrap text-sm"
        >awesome-site.com</span
      >
    </div>

    <IconHamburgerMenu class="hidden" :class="{ 'sm:block': sm }" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  sm: {
    type: Boolean,
    required: true,
  },
})
</script>
