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
   * 是否显示边框
   * 
   * @default: false
   */
  border?: boolean;
  /**
   * Radio 的尺寸，仅在 border 为真时有效
   */
  size?: "medium" | "small" | "mini";
  /**
   * 原生 name 属性
   */
  name?: string;
}>()

defineEmits<{
  (e: 'input', value: string | number | boolean): void;
}>()
</script>