<template>
  <slot></slot>
  <slot name="template"></slot>
</template>

<script setup lang="ts">

defineProps<{
  /**
   * 是否使用动画
   * 
   * @default false
   */
  animated?: boolean
  /**
   * 渲染多少个 template, 建议使用尽可能小的数字
   * 
   * @default 1
   */
  count?: number
  /**
   * 是否显示 skeleton 骨架屏
   * 
   * @default true
   */
  loading?: boolean
  /**
   * 骨架屏段落数量
   * 
   * @default 4
   */
  rows?: number
  /**
   * 延迟占位 DOM 渲染的时间, 单位是毫秒
   * 
   * @default 0
   */
  throttle?: number
}>()
</script>