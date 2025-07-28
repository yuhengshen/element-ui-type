<template>
  <slot name="title"></slot>
  <slot name="content"></slot>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  content?: string
}>()

defineEmits<{
  (e: "back"): void
}>()
</script>