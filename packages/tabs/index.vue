<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps({
  type: String,
  activeName: String,
  closable: Boolean,
  addable: Boolean,
  value: {},
  editable: Boolean,
  tabPosition: {
    type: String,
    default: "top",
  },
  beforeLeave: Function,
  stretch: Boolean,
});

defineEmits<{
  (e: "tab-click", vm: any): void;
  (e: "tab-remove", targetName: string): void;
  (e: "tab-add"): void;
  (e: "edit", targetName: string, action: string): void;
}>();
</script>
