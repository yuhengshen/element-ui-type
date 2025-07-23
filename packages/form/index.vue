<script setup lang="ts">
import type { Rule } from "../form-item/index.vue";

defineProps<{
  /**
   * 表单数据对象
   */
  model?: object;
  /**
   * 表单验证规则
   */
  rules?: Record<string, Rule[]>;
  /**
   * 行内表单模式
   */
  inline: boolean;
  /**
   * 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
   */
  labelPosition: "right" | "left" | "top";
  /**
   * 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
   */
  labelWidth: string;
  /**
   * 表单域标签的后缀
   */
  labelSuffix: string;
  /**
   * 是否隐藏必填字段的标签旁边的红色星号
   */
  hideRequiredAsterisk: boolean;
  /**
   * 是否显示校验错误信息
   */
  showMessage: boolean;
  /**
   * 是否以行内形式展示校验信息
   */
  inlineMessage: boolean;
  /**
   * 是否在输入框中显示校验结果反馈图标
   */
  statusIcon: boolean;
  /**
   * 是否在 rules 属性改变后立即触发一次验证
   */
  validateOnRuleChange: boolean;
  /**
   * 用于控制该表单内组件的尺寸
   */
  size: "medium" | "small" | "mini";
  /**
   * 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
   */
  disabled: boolean;
}>();

defineEmits<{
  (e: "validate", propValue: any, error: any): void;
}>();
</script>
