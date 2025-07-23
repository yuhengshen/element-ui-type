<template>
  <slot></slot>
</template>

<script>
export default {
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
