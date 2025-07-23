<template>
  <slot></slot>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: [Number, String],
  },
  shape: {
    type: String,
    default: "circle",
  },
  icon: String,
  src: String,
  alt: String,
  srcSet: String,
  error: Function,
  fit: {
    type: String,
    default: "cover",
  },
});
</script>
