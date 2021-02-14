<template>
  <div
    class="py-6 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
  >
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <button
          @click="$emit('remove', task.id)"
          class="px-2 py-1 text-sm hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-opacity-50"
        >
          X
        </button>
      </div>
    </div>
    <p class="p-2">
      {{ task.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>