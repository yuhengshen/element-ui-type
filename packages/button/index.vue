<template>
  <slot></slot>
</template>
<script setup lang="ts">
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info" | "text";
export type ButtonSize = "medium" | "small" | "mini";

defineProps<{
  type?: ButtonType;
  size?: ButtonSize;
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
