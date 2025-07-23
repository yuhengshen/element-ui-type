<template>
<slot name="prefix" />
<slot name="suffix" />
<slot name="prepend" />
<slot name="append" />
</template>

<script setup lang="ts">
const props = defineProps({
  /**
   * 输入框类型
   */
  type: {
    type: String,
    default: "text",
  },
  /**
   * 绑定值
   */
  modelValue: [String, Number],
  /**
   * 最大输入长度
   */
  maxlength: Number,
  /**
   * 最小输入长度
   */
  minlength: Number,
  /**
   * 是否显示输入字数统计，只在 type="text" 或 type="textarea" 时有效
   */
  showWordLimit: Boolean,
  /**
   * 输入框占位文本
   */
  placeholder: String,
  /**
   * 是否可清空
   */
  clearable: Boolean,
  /**
   * 是否显示切换密码图标
   */
  showPassword: Boolean,
  /**
   * 是否禁用
   */
  disabled: Boolean,
  /**
   * 输入框尺寸，只在 type!="textarea" 时有效
   */
  size: String,
  /**
   * 输入框头部图标
   */
  prefixIcon: String,
  /**
   * 输入框尾部图标
   */
  suffixIcon: String,
  /**
   * 输入框行数，只对 type="textarea" 有效
   */
  rows: Number,
  /**
   * 自适应内容高度，只对 type="textarea" 有效，可传对象 { minRows, maxRows }
   */
  autosize: [Boolean, Object],
  /**
   * 原生属性，自动补全
   */
  autocomplete: String,
  /**
   * 下个主版本弃用
   */
  autoComplete: String,
  /**
   * 原生属性
   */
  name: String,
  /**
   * 原生属性，是否只读
   */
  readonly: Boolean,
  /**
   * 原生属性，设置最大值
   */
  max: [String, Number],
  /**
   * 原生属性，设置最小值
   */
  min: [String, Number],
  /**
   * 原生属性，设置输入字段的合法数字间隔
   */
  step: [String, Number],
  /**
   * 控制是否能被用户缩放
   */
  resize: String,
  /**
   * 原生属性，自动获取焦点
   */
  autofocus: Boolean,
  /**
   * 原生属性
   */
  form: String,
  /**
   * 输入框关联的label文字
   */
  label: String,
  /**
   * 输入框的tabindex
   */
  tabindex: String,
  /**
   * 输入时是否触发表单的校验
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
});
</script>
