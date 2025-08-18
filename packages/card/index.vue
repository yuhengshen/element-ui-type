<template>
  <slot></slot>
  <slot name="header"></slot>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';

/*
 * header	设置 header，也可以通过 slot#header 传入 DOM	string	—	—
 * body-style	设置 body 的样式	object	—	{ padding: '20px' }
 * shadow	设置阴影显示时机	string	always / hover / never	always 
 */
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
