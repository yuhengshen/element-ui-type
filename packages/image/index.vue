<template>
  <slot></slot>
  <slot name="placeholder"></slot>
  <slot name="error"></slot>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * 图片源，同原生
   */
  src?: string;
  /**
   * 确定图片如何适应容器框，同原生
   */
  fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  /**
   * 原生 alt
   */
  alt?: string;
  /**
   * 原生 referrerPolicy
   */
  referrerPolicy?: string;
  /**
   * 是否开启懒加载
   */
  lazy?: boolean;
  /**
   * 开启懒加载后，监听 scroll 事件的容器
   */
  scrollContainer?: string | HTMLElement;
  /**
   * 开启图片预览功能
   */
  previewSrcList?: string[];
  /**
   * 设置图片预览的 z-index
   */
  zIndex?: number;
  /**
   * 图片预览初始图片index
   */
  initialIndex?: number;
}>();


const emit = defineEmits<{
  (e: "load", event: Event): void;
  (e: "error", event: Error): void;
}>();
</script>
