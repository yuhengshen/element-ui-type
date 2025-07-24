<script setup lang="ts">
defineProps<{
  /**
   * 绑定值
   *
   * @default: 0
   */
  value?: number;
  /**
   * 设置计数器允许的最小值
   *
   * @default: -Infinity
   */
  min?: number;
  /**
   * 设置计数器允许的最大值
   *
   * @default: Infinity
   */
  max?: number;
  /**
   * 计数器步长
   *
   * @default: 1
   */
  step?: number;
  /**
   * 是否只能输入 step 的倍数
   *
   * @default: false
   */
  stepStrictly?: boolean;
  /**
   * 数值精度
   */
  precision?: number;
  /**
   * 计数器尺寸
   */
  size?: "large" | "small";
  /**
   * 是否禁用计数器
   *
   * @default: false
   */
  disabled?: boolean;
  /**
   * 是否使用控制按钮
   *
   * @default: true
   */
  controls?: boolean;
  /**
   * 控制按钮位置
   */
  controlsPosition?: "right";
  /**
   * 原生属性
   */
  name?: string;
  /**
   * 输入框关联的label文字
   */
  label?: string;
  /**
   * 输入框默认 placeholder
   */
  placeholder?: string;
}>();

defineEmits<{
  (e: "change", currentValue: number, oldValue: number): void;
  (e: "blur", event: FocusEvent): void;
  (e: "focus", event: FocusEvent): void;
}>();

/**
 * 	使 input 获取焦点
 */
function focus() {}
/**
 * 选中 input 中的文字
 */
function select() {}

defineExpose({
  focus: () => {},
  select: () => {},
});
</script>
