<template>
  <slot></slot>
  <slot name="title"></slot>
  <slot name="extra"></slot>
</template>
<script setup lang="ts">

defineProps<{
  /**
   * 是否带有边框
   *
   * @default false
   */
  border?: boolean;
  /**
   * 一行 Descriptions Item 的数量
   *
   * @default 3
   */
  column?: number;
  /**
   * 排列的方向
   *
   * @default 'horizontal'
   */
  direction?: "horizontal" | "vertical";
  /**
   * 列表的尺寸
   */
  size?: "medium" | "small" | "mini";
  /**
   * 标题文本，显示在左上方
   */
  title?: string;
  /**
   * 操作区文本，显示在右上方
   */
  extra?: string;
  /**
   * 是否显示冒号
   *
   * @default true
   */
  colon?: boolean;
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
