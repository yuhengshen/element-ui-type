<template>
  <slot></slot>
</template>

<script setup lang="ts">
defineProps({
  value: [String, Number],
  max: Number,
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
  },
});
</script>
