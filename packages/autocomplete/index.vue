<template>
  <slot name="prepend"></slot>
  <slot name="append"></slot>
  <slot name="prefix"></slot>
  <slot name="suffix"></slot>
  <slot :item="item">
    {{ item[valueKey] }}
  </slot>
</template>
<script setup lang="ts">
import { Placement } from "packages/popover/index.vue";

const item = {} as { value: string; [key: string]: any };

defineProps<{
  /**
   * 输入建议对象中用于显示的键名
   *
   * @default 'value'
   */
  valueKey?: string;
  /**
   * Autocomplete 下拉列表的类名
   */
  popperClass?: string;
  /**
   * Popper.js 的参数
   */
  popperOptions?: any;
  /**
   * 输入框占位文本
   */
  placeholder?: string;
  /**
   * 显示清空按钮
   *
   * @default false
   */
  clearable?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 原生属性
   */
  name?: string;
  /**
   * 输入框尺寸
   */
  size?: "medium" | "small" | "mini";
  /**
   * 必填值，输入绑定值
   */
  value?: string;
  /**
   * 最大输入长度
   */
  maxlength?: number;
  /**
   * 最小输入长度
   */
  minlength?: number;
  /**
   * 原生属性，自动获取焦点
   */
  autofocus?: boolean;
  /**
   * 	返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 cb(data:[]) 来返回它
   * @param queryString
   * @param cb
   */
  fetchSuggestions?: (queryString: string, cb: (data: any[]) => void) => void;
  /**
   * 是否在输入框 focus 时显示建议列表
   */
  triggerOnFocus?: boolean;
  /**
   * 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件
   */
  selectWhenUnmatched?: boolean;
  /**
   * 输入框头部图标
   */
  prefixIcon?: string;
  /**
   * 输入框尾部图标
   */
  suffixIcon?: string;
  /**
   * 输入框关联的label文字
   */
  label?: string;
  /**
   * 获取输入建议的去抖延时
   *
   * @default 300
   */
  debounce?: number;
  /**
   * 菜单弹出位置
   *
   * @default 'bottom-start'
   */
  placement?: Placement;
  /**
   * 是否隐藏远程加载时的加载图标
   */
  hideLoading?: boolean;
  /**
   * 是否将弹出框插入至 body 元素下
   */
  popperAppendToBody?: boolean;
  /**
   * 是否默认突出显示远程搜索建议中的第一项
   */
  highlightFirstItem?: boolean;
}>();

defineEmits<{
  (e: "input", value: string): void;
  (e: "change", value: string): void;
  (e: "focus", event: FocusEvent): void;
  (e: "blur", event: FocusEvent): void;
  (e: "clear"): void;
  (e: "select", item: { value: string; [key: string]: any }): void;
}>();
</script>
