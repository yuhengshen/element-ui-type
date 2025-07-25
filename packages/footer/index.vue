<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 底栏高度
   * 
   * @default '60px'
   */
   height?: "string";
}>();
</script>
