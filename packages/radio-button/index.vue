<script setup lang="ts">
defineProps<{
  /**
   * 绑定值
   */
  value?: string | number | boolean;
  /**
   * Radio 的 value
   */
  label?: string | number | boolean;
  /**
   * 是否禁用
   * 
   * @default: false
   */
  disabled?: boolean;
  /**
   * 原生 name 属性
   */
  name?: string;
}>()
</script>