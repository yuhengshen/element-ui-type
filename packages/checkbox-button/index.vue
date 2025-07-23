<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineEmits<{
  (e: "change", value: any): void;
  (e: "input", value: any, ev: any): void;
}>();

defineProps({
  value: {},
  label: {},
  disabled: Boolean,
  checked: Boolean,
  name: String,
  trueLabel: [String, Number],
  falseLabel: [String, Number],
});
</script>
