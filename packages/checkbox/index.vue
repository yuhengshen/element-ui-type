<template>
  <slot></slot>
</template>
<script lang="ts" setup>
defineEmits<{
  (e: "change", value: any): void;
  (e: "input", value: any, ev: any): void;
}>();

defineProps({
  value: {},
  label: {},
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: String,
  trueLabel: [String, Number],
  falseLabel: [String, Number],
  id: String /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/,
  controls:
    String /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/,
  border: Boolean,
  size: String,
});
</script>
