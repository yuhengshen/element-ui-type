<script setup lang="ts">
defineProps<{
  /**
   * 绑定值
   */
  value?: string | number | boolean;
  /**
   * 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效
   */
  size?: "medium" | "small" | "mini";
  /**
   * 是否禁用
   *
   * @default: false
   */
  disabled?: boolean;
  /**
   * 按钮形式的 Radio 激活时的文本颜色
   *
   * @default: #ffffff
   */
  textColor?: string;
  /**
   * 按钮形式的 Radio 激活时的填充色和边框色
   *
   * @default: #409EFF
   */
  fill?: string;
}>();

defineEmits<{
  (e: "input", value: string | number | boolean): void;
}>();
</script>
