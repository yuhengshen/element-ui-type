<template>
  <slot></slot>
</template>
<script setup lang="ts">
defineProps({
  separator: {
    type: String,
    default: "/",
  },
  separatorClass: {
    type: String,
    default: "",
  },
});
</script>
