<template>
  <slot name="prefix"></slot>
  <slot name="suffix"></slot>
  <slot name="formatter"></slot>
  <slot name="title"></slot>
</template>

<script setup lang="ts">
import { VNode } from "vue";

defineProps<{
  /**
   * 数值内容
   */
  value?: string | number;
  /**
   * 设置小数点
   */
  decimalSeparator?: string;
  /**
   * 自定义数值展示
   */
  formatter?: (value: string | number) => VNode;
  /**
   * 设置千分位标识符
   */
  groupSeparator?: string;
  /**
   * 数值精度
   */
  precision?: number;
  /**
   * 设置数值的前缀
   */
  prefix?: string;
  /**
   * 设置数值的后缀
   */
  suffix?: string;
  /**
   * 数值的标题
   */
  title?: string;
  /**
   * 设置数值的样式
   */
  valueStyle?: Record<string, string>;
  /**
   * 设置倍率
   *
   * @default 1000
   */
  rate?: number;

  /**
   * 是否开启倒计时功能
   *
   * @default false
   */
  timeIndices?: boolean;
  /**
   * 格式化倒计时展示
   *
   * @default 'HH:mm:ss'
   */
  format?: string;
}>();

/**
 * 暂停倒计时
 *
 * @param value 是否暂停
 */
function suspend(value: boolean) {}

defineExpose({
  suspend,
});

defineEmits<{
  (e: "change", value: Date): void;
  (e: "finish", value: boolean): void;
}>();
</script>
