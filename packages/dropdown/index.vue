
<template>
  <slot></slot>
  <slot name="dropdown"></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)
   */
  type?: "primary" | "success" | "warning" | "danger" | "info" | "text";
  /**
   * 菜单尺寸，在split-button为 true 的情况下也对触发按钮生效
   */
  size?: "medium" | "small" | "mini";
  /**
   * 下拉触发元素呈现为按钮组
   * 
   * @default false
   */
  splitButton?: boolean;
  /**
   * 菜单弹出位置
   * 
   * @default 'bottom-end'
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  /**
   * 触发下拉的行为
   * 
   * @default 'hover'
   */
  trigger?: "hover" | "click";
  /**
   * 是否在点击菜单项后隐藏菜单
   * 
   * @default true
   */
  hideOnClick?: boolean;
  /**
   * 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）
   * 
   * @default 250
   */
  showTimeout?: number;
  /**
   * 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）
   * 
   * @default 150
   */
  hideTimeout?: number;
  /**
   * Dropdown 组件的 tabindex
   * 
   * @default 0
   */
  tabindex?: number;
  /**
   * 是否禁用
   * 
   * @default false
   */
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
  (e: 'command', command: string | number | object): void;
  (e: 'visible-change', visible: boolean): void;
}>();

</script>