<script setup lang="ts">
defineEmits<{
  (e: "change", value: any): void;
}>();

defineProps({
  value: {},
  disabled: Boolean,
  min: Number,
  max: Number,
  size: String,
  fill: String,
  textColor: String,
});
</script>

<template>
  <slot></slot>
</template>
