<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps<{
  type?: "primary" | "success" | "warning" | "danger" | "info" | "text";
  size?: "medium" | "small" | "mini";
  icon?: string;
  nativeType?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  /**
   * 是否朴素按钮
   */
  plain?: boolean;
  autofocus?: boolean;
  round?: boolean;
  /**
   * 是否圆形按钮
   */
  circle?: boolean;
}>();

defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
</script>
