<template>
  <slot name="icon"></slot>
  <slot name="title"></slot>
  <slot name="description"></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 标题
   */
  title?: string;
  /**
   * 描述性文字
   */
  description?: string;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 设置当前步骤的状态，不设置则根据 steps 确定状态
   */
  status?: "wait" | "process" | "finish" | "error" | "success";
}>();
</script>
