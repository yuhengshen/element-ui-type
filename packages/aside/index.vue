<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 侧边栏宽度
   * 
   * @default '300px'
   */
  width?: "string";
}>();
</script>
