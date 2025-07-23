<template>
  <slot></slot>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
defineProps({
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  target: [String],
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
});
</script>
