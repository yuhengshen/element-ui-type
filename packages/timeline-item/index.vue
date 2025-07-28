<template>
  <slot></slot>
  <slot name="dot"></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 时间戳
   */
  timestamp?: string;
  /**
   * 是否隐藏时间戳
   *
   * @default false
   */
  hideTimestamp?: boolean;
  /**
   * 时间戳位置
   *
   * @default 'bottom'
   */
  placement?: 'top' | 'bottom';
  /**
   * 节点类型
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /**
   * 节点颜色
   */
  color?: string;
  /**
   * 节点尺寸
   *
   * @default 'normal'
   */
  size?: 'normal' | 'large';
  /**
   * 节点图标
   */
  icon?: string;
}>();

</script>