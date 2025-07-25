<template>
  <slot></slot>
  <slot name="image"></slot>
  <slot name="description"></slot>
</template>

<script lang="ts" setup>
defineProps<{
  /**
   * 图片地址
   */
  image?: string;
  /**
   * 图片大小（宽度）
   */
  imageSize?: number;
  /** 文本描述 */
  description?: string;
}>();

</script>
