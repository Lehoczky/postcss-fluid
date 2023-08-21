<template>
  <div
    class="bg-base-400 flex items-center justify-between gap-4 px-6 py-4"
    :class="{ 'sm:gap-8': sm }"
  >
    <div class="flex gap-2">
      <div class="h-3.5 w-3.5 rounded-full bg-red-400" />
      <div class="h-3.5 w-3.5 rounded-full bg-yellow-400" />
      <div class="h-3.5 w-3.5 rounded-full bg-green-400" />
    </div>

    <div
      class="bg-base-500 text-base-300 flex max-w-md flex-1 items-center justify-center gap-1 overflow-hidden rounded-md px-2 py-1.5 text-opacity-75"
      :class="{ 'sm:px-4': sm }"
    >
      <IconLockClosed />
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
