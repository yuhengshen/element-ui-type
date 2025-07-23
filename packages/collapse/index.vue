<template></template>
<script setup lang="ts">
defineProps<{
  /**
   * 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)
   */
  value?: string | string[]
  /**
   * 是否手风琴模式
   * 
   * @default false
   */
  accordion?: boolean;
}>()

defineEmits<{
  (e: 'input', value: string | string[]): void;
  (e: 'change', activeNames: string | string[]): void;
}>()
</script>
