<template>
  <input
    type="text"
    class="w-full mt-2 mb-6 px-6 py-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-lg text-lg text-gray-700"
    :value="value"
    v-on="change"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    change() {
      var vm = this;
      return {
        // Pass all component listeners directly to input
        ...vm.$listeners,
        // Override input listener to work with v-model
        input: (event) => vm.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style scoped>
/* @import '../variables.scss'; */

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $vue-blue;
}
</style>
