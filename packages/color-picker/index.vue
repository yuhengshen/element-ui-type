<script setup lang="ts">
defineProps<{
  /**
   * 绑定值
   */
  value?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 尺寸
   */
  size?: string;
  /**
   * 是否支持透明度选择
   */
  showAlpha?: boolean;
  /**
   * 写入 v-model 的颜色的格式
   * 
   * rgb	hex（show-alpha 为 false）/ rgb（show-alpha 为 true）
   */
  colorFormat?: "hsl" | "hsv" | "hex" | "rgb";
  /**
   * ColorPicker 下拉框的类名
   */
  popperClass?: string;
  /**
   * 预定义颜色
   */
  predefine?: string[];
}>();

defineEmits<{
  (e: 'input', value: string): void;
  (e: "change", value: string): void;
  (e: "active-change", value: string): void;
}>();
</script>