<script setup lang="ts">
defineProps<{
  type?: string
  /**
   * 半径
   * 
   * @default 100
   */
  radius?: number
  /**
   * 线宽
   * 
   * @default 5
   */
  strokeWidth?: number
  /**
   * 颜色
   * 
   * @default "#efefef"
   */
  strokeColor?: string
}>()
</script>