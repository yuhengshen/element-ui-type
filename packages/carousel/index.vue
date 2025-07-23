<template>
  <slot></slot>
</template>

<script setup lang="ts">
defineProps({
  initialIndex: {
    type: Number,
    default: 0,
  },
  height: String,
  trigger: {
    type: String,
    default: "hover",
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 3000,
  },
  indicatorPosition: String,
  indicator: {
    type: Boolean,
    default: true,
  },
  arrow: {
    type: String,
    default: "hover",
  },
  type: String,
  loop: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: "horizontal",
  },
});

defineEmits<{
  (e: "change", index: number, oldIndex: number): void;
}>();
</script>
