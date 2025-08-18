<template>
  <slot></slot>
  <slot name="header"></slot>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';

defineProps<{
  /**
   * 设置 header，也可以通过 slot#header 传入 DOM
   */
  header?: string;
  /**
   * 设置 body 的样式
   * @default { padding: '20px' }
   */
  bodyStyle?: CSSProperties;
  /**
   * 设置阴影显示时机
   * @default always
   */
  shadow?: "always" | "hover" | "never";
}>();
</script>
