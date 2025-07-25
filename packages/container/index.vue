<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 子元素的排列方向
   * 
   * @default '子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal'
   */
  direction?: "horizontal" | "vertical";
}>();
</script>