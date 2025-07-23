<template></template>
<script setup lang="ts">
defineProps<{
  /**
   * 唯一标志符
   */
  name?: string | number;
  /**
   * 面板标题
   */
  title?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}>();
</script>
