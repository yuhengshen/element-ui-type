<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps<{
  type?: "card" | "border-card";
  activeName?: string;
  closable?: boolean;
  addable?: boolean;
  /**
   * 绑定值，选中选项卡的 name
   */
  value?: string;
  editable?: boolean;
  tabPosition?: "top" | "right" | "bottom" | "left";
  /**
   * 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。
   */
  beforeLeave?: (
    activeName: string,
    oldActiveName: string
  ) => boolean | Promise<any>;
  /**
   * 标签的宽度是否自撑开
   */
  stretch?: boolean;
}>();

defineEmits<{
  (e: "tab-click", vm: any): void;
  (e: "tab-remove", targetName: string): void;
  (e: "tab-add"): void;
  (e: "edit", targetName: string, action: string): void;
}>();
</script>
