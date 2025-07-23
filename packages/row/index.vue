<template>
  <slot></slot>
</template>
<script setup lang="ts">

defineProps<{
  /**
   * 栅格间隔
   * @default 0
   */
  gutter?: number;
  /**
   * 布局模式，可选 flex，现代浏览器下有效
   */
  type?: "flex";
  /**
   * flex 布局下的水平排列方式
   * @default start
   */
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  /**
   * flex 布局下的垂直排列方式
   */
  align?: "top" | "middle" | "bottom";
  /**
   * 自定义元素标签
   * @default div
   */
  tag?: string;
}>();
</script>
