<template>
  <slot></slot>
</template>
<script setup lang="ts">

defineProps<{
  /**
   * 栅格占据的列数
   * @default 24
   */
  span?: number;
  /**
   * 栅格左侧的间隔格数
   * @default 0
   */
  offset?: number;
  /**
   * 栅格向右移动格数
   * @default 0
   */
  push?: number;
  /**
   * 栅格向左移动格数
   * @default 0
   */
  pull?: number;
  /**
   * 自定义元素标签
   * @default div
   */
  tag?: string;
  /**
   * <768px 响应式栅格数或者栅格属性对象
   */
  xs?: number | { span?: number; offset?: number; push?: number; pull?: number };
  /**
   * ≥768px 响应式栅格数或者栅格属性对象
   */
  sm?: number | { span?: number; offset?: number; push?: number; pull?: number };
  /**
   * ≥992px 响应式栅格数或者栅格属性对象
   */
  md?: number | { span?: number; offset?: number; push?: number; pull?: number };
  /**
   * ≥1200px 响应式栅格数或者栅格属性对象
   */
  lg?: number | { span?: number; offset?: number; push?: number; pull?: number };
  /**
   * ≥1920px 响应式栅格数或者栅格属性对象
   */
  xl?: number | { span?: number; offset?: number; push?: number; pull?: number };
}>();
</script>
