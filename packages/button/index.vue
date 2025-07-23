<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: String,
  icon: {
    type: String,
    default: "",
  },
  nativeType: {
    type: String,
    default: "button",
  },
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
});

defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
</script>
