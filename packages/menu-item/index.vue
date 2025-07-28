<script setup lang="ts">
defineProps<{
  /**
   * 唯一标志
   */
  index: string
  /**
   * Vue Router 路径对象
   */
  route?: object
  /**
   * 是否禁用
   * 
   * @default false
   */
  disabled?: boolean
}>()
</script>