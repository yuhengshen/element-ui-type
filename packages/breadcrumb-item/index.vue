<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps({
  to: {},
  replace: Boolean,
});
</script>

