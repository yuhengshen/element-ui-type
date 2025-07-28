<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
  * 类型
  * @default "primary"
  */
  type?: "primary" | "success" | "warning" | "danger" | "info";
  /**
   * 是否下划线
   * @default true
   */
  underline?: boolean;
  /**
   * 是否禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 原生 href 属性
   */
  href?: string;
  /**
   * 图标类名
   */
  icon?: string;
}>();
</script>