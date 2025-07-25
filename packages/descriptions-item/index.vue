<template>
  <slot></slot>
  <slot name="label"></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 标签文本
   */
  label?: string;
  /**
   * 列的数量
   * 
   * @default 1
   */
  span?: number;
  /**
   * 自定义标签类名
   */
  labelClassName?: string;
  /**
   * 自定义内容类名
   */
  contentClassName?: string;
  /**
   * 自定义标签样式
   */
  labelStyle?: Record<string, any>;
  /**
   * 自定义内容样式
   */
  contentStyle?: Record<string, any>;
}>();
</script>
