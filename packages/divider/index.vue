<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 设置分割线方向
   * @default 'horizontal'
   */
  direction: "horizontal" | "vertical";
  /**
   * 设置分割线文案的位置
   * @default center
   */
  contentPosition: "left" | "right" | "center";
}>();
</script>
