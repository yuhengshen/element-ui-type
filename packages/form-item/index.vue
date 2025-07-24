<template>
  <slot></slot>
  <slot name="label"></slot>
  <slot name="error" :error="error"></slot>
</template>
<script setup lang="ts">
export type Rule = {
  required?: boolean;
  trigger?: "blur" | "change";
  validator?: (
    rule: Rule,
    value: any,
    callback: (error?: string) => void
  ) => void;
  message?: string;
  type?:
    | "string"
    | "number"
    | "boolean"
    | "method"
    | "regexp"
    | "integer"
    | "float"
    | "object"
    | "enum"
    | "date"
    | "url"
    | "hex"
    | "email"
    | "any";
  pattern?: RegExp;
  min?: number;
  max?: number;
  range?: [number, number];
};

const error = {} as { error: string }[];

defineProps<{
  /**
   * 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的
   */
  prop?: string;
  /**
   * 标签文本
   */
  label?: string;
  /**
   * 表单域标签的的宽度，例如 '50px'。支持 auto。
   */
  labelWidth?: string;
  /**
   * 是否必填，如不设置，则会根据校验规则自动生成
   */
  required?: boolean;
  /**
   * 表单验证规则
   */
  rules?: Rule[] | Rule;
  /**
   * 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
   */
  error?: string;
  /**
   * 是否显示校验错误信息
   */
  showMessage?: boolean;
  /**
   * 以行内形式展示校验信息
   */
  inlineMessage?: boolean;
  /**
   * 用于控制该表单域下组件的尺寸
   */
  size?: "medium" | "small" | "mini";
}>();

/**
 * 对该表单项进行重置，将其值重置为初始值并移除校验结果
 */
function resetField() {}
/**
 * 移除该表单项的校验结果
 */
function clearValidate() {}

defineExpose({
  resetField,
  clearValidate,
});
</script>
