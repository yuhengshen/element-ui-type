<template>
  <slot name="reference"></slot>
</template>

<script setup lang="ts">
import { ButtonType } from "../button/index.vue";

defineProps<{
  /**
   * 标题
   */
  title?: string;
  /**
   * 确认按钮文字
   */
  confirmButtonText?: string;
  /**
   * 取消按钮文字
   */
  cancelButtonText?: string;
  /**
   * 确认按钮类型
   * 
   * @default "primary"
   */
  confirmButtonType?: ButtonType;
  /**
   * 取消按钮类型
   * 
   * @default "text"
   */
  cancelButtonType?: ButtonType;
  /**
   * Icon
   * 
   * @default "el-icon-question"
   */
  icon?: string;
  /**
   * Icon 颜色
   * 
   * @default "#f90"
   */
  iconColor?: string;
  /**
   * 是否隐藏 Icon
   * 
   * @default false
   */
  hideIcon?: boolean;
}>();

defineEmits<{
  (e: "confirm"): void;
  (e: "cancel"): void;
}>();
</script>
