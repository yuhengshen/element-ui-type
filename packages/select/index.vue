<script setup lang="ts">
defineProps<{
  /**
   * 绑定值
   */
  value?: boolean | string | number;
  /**
   * 是否多选
   */
  multiple?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 作为 value 唯一标识的键名，绑定值为对象类型时必填
   */
  valueKey?: string;
  /**
   * 输入框尺寸
   */
  size?: "medium" | "small" | "mini";
  /**
   * 是否可以清空选项
   */
  clearable?: boolean;
  /**
   * 是否可搜索
   */
  filterable?: boolean;
  /**
   * 多选时是否将选中值按文字的形式展示
   */
  collapseTags?: boolean;
  /**
   * 多选时用户最多可以选择的项目数，为 0 则不限制
   */
  multipleLimit?: number;
  /**
   * select input 的 name 属性
   */
  name?: string;
  /**
   * select input 的 autocomplete 属性
   */
  filterMethod?: (query: string) => void;
  /**
   * 是否为远程搜索
   */
  remote?: boolean;
  /**
   * 远程搜索方法
   */
  remoteMethod?: (query: string) => void;
  /**
   * 是否正在从远程获取数据
   */
  loading?: boolean;
  /**
   * 远程加载时显示的文字
   */
  loadingText?: string;
  /**
   * 搜索条件无匹配时显示的文字，也可以使用slot="empty"设置
   */
  noMatchText?: string;
  /**
   * 选项为空时显示的文字，也可以使用slot="empty"设置
   */
  noDataText?: string;
  /**
   * 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false
   */
  popperAppendToBody?: boolean;
  /**
   * 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单
   */
  automaticDropdown?: boolean;
}>();

defineEmits<{
  (e: "input", value: boolean | string | number): void;
  /**
   * 选中值发生变化时触发
   */
  (e: "change", value: boolean | string | number): void;
  /**
   * 下拉框出现/隐藏时触发
   */
  (e: "visible-change", visible: boolean): void;
  /**
   * 多选模式下移除tag时触发
   */
  (e: "remove-tag", value: boolean | string | number): void;
  /**
   * 可清空的单选模式下用户点击清空按钮时触发
   */
  (e: "clear"): void;
  /**
   * 当 input 失去焦点时触发
   */
  (e: "blur", event: FocusEvent): void;
  /**
   * 当 input 获得焦点时触发
   */
  (e: "focus", event: FocusEvent): void;
}>();

/**
 * 使 input 获取焦点
 */
function focus() {}

/**
 * 使 input 失去焦点，并隐藏下拉框
 */
function blur() {}

defineExpose({
  focus,
  blur,
});
</script>

<template>
  <slot></slot>
  <slot name="prefix"></slot>
  <slot name="empty"></slot>
</template>
