<template>
  <slot></slot>
  <slot name="title"></slot>
</template>
<script setup lang="ts">
defineProps<{
  /** 标题 */
  title?: string;
  /** 
   * 主题
   * @default info
   */
  type?: "success" | "warning" | "info" | "error";
  /** 辅助性文字。也可通过默认 slot 传入 */
  description?: string;
  /** 
   * 是否可关闭
   * @default true
   */
  closable?: boolean;
  /** 
   * 文字是否居中
   * @default true
   */
  center?: boolean;
  /** 关闭按钮自定义文本 */
  closeText?: string;
  /** 
   * 是否显示图标
   * @default false
   */
  showIcon?: boolean;
  /** 
   * 选择提供的主题
   * @default light
   */
  effect?: string;
}>();

defineEmits<{
  /** 关闭时触发 */
  (e: "close"): void;
}>();
</script>
