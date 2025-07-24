<template>
  <slot :node="node" :data="data"></slot>
  <slot name="empty"></slot>
</template>

<script setup lang="ts">

export type Value = string | number;

export interface Props {
  /**
   * 次级菜单的展开方式
   * @default 'click'
   */
  expandTrigger?: "click" | "hover";
  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 是否严格的遵守父子节点不互相关联
   */
  checkStrictly?: boolean;
  /**
   * 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
   * @default true
   */
  emitPath?: boolean;
  /**
   * 是否动态加载子节点，需与 lazyLoad 方法结合使用
   */
  lazy?: boolean;
  /**
   * 加载动态数据的方法，仅在 lazy 为 true 时有效
   */
  lazyLoad?: (node: Node, resolve: (data: Data[]) => void) => void;
  /**
   * 指定选项的值为选项对象的某个属性值
   * @default 'value'
   */
  value?: string;
  /**
   * 指定选项标签为选项对象的某个属性值
   * @default 'label'
   */
  label?: string;
  /**
   * 指定选项的子选项为选项对象的某个属性值
   * @default 'children'
   */
  children?: string;
  /**
   * 指定选项的禁用为选项对象的某个属性值
   * @default 'disabled'
   */
  disabled?: string;
  /**
   * 指定选项的叶子节点的标志位为选项对象的某个属性值
   * @default 'leaf'
   */
  leaf?: string;
}

export interface Data {
  label: string;
  value: string;
  children: Data[];
  [key: string]: any;
}

export interface Node {
  checked: boolean;
  children: Node[];
  config: Props;
  data: Data;
  hasChildren: boolean;
  indeterminate: boolean;
  label: string;
  level: string;
  loaded: boolean;
  loading: boolean;
  parent: Node | null;
  path: (string | number)[];
  pathLabels: string[];
  pathNodes: Node[];
  uid: number;
  value: string | number;
  isDisabled: boolean;
  isLeaf: boolean;
  [key: string]: any;
}
let node: Node;
let data: Data;

export type Option = {
  value?: string | number;
  label?: string;
  children?: Option[];
  [key: string]: any;
};

defineProps<{
  /**
   * 选中项绑定值
   */
  value?: Value | Value[] | Value[][];
  /**
   * 可选项数据源，键名可通过 Props 属性配置
   */
  options?: Option[];
  /**
   * 配置选项
   */
  props?: Props;
  /**
   * 尺寸
   */
  size?: "medium" | "small" | "mini";
  /**
   * 输入框占位文本
   * @default '请选择'
   */
  placeholder?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否支持清空选项
   */
  clearable?: boolean;
  /**
   * 输入框中是否显示选中值的完整路径
   * @default true
   */
  showAllLevels?: boolean;
  /**
   * 多选模式下是否折叠Tag
   * @default false
   */
  collapseTags?: boolean;
  /**
   * 选项分隔符
   * @default ' / '
   */
  separator?: string;
  /**
   * 是否可搜索选项
   */
  filterable?: boolean;
  /**
   * 自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中
   */
  filterMethod?: (node: Node, keyword: string) => boolean;
  /**
   * 搜索关键词输入的去抖延迟，毫秒
   * @default 300
   */
  debounce?: number;
  /**
   * 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选
   */
  beforeFilter?: (value: string) => boolean | Promise<any>;
  /**
   * 自定义浮层类名
   */
  popperClass?: string;
}>();

defineEmits<{
  (e: "input", value: Value | Value[] | Value[][]): void;
  (e: "change", value: Value | Value[] | Value[][]): void;
  (e: "expand-change", value: Value[]): void;
  (e: "blur", event: FocusEvent): void;
  (e: "focus", event: FocusEvent): void;
  (e: "visible-change", visible: boolean): void;
  (e: "remove-tag", value: Value | Value[]): void;
}>();

/**
 * @param leafOnly 是否只获取叶子节点
 *
 * @default false
 */
function getCheckedNodes(leafOnly: boolean): Node[] {
  return [];
}
defineExpose({
  getCheckedNodes,
});
</script>
