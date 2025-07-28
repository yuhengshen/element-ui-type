<script setup lang="ts">
defineProps<{
  /**
   * 当前显示的占位元素的样式
   * 
   * @default "text"
   */
  variant?: "p" | "h1" | "h3" | "text" | "caption" | "button" | "image" | "circle" | "rect"
}>()
</script>