<template>
  <slot name="icon"></slot>
  <slot name="title"></slot>
  <slot name="subTitle"></slot>
  <slot name="extra"></slot>
</template>

<script setup lang="ts">

defineProps<{
  /**
   * 标题
   */
  title?: string
  /**
   * 二级标题
   */
  subTitle?: string
  /**
   * 图标类型
   * 
   * @default "info"
   */
  icon?: string
}>()
</script>