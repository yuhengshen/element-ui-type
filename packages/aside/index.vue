<template>
  <slot></slot>
</template>
<script setup>
defineProps({
  width: {
    type: String,
    default: "300px",
  },
});
</script>
