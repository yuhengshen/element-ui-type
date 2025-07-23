<template>
  <slot :node="node" :data="data"></slot>
  <slot name="empty"></slot>
</template>

<script setup lang="ts">
interface Data {
  label: string;
  value: string;
  children: Data[];
  [key: string]: any;
}

interface Node {
  isDisabled: boolean;
  text: string;
  value: string | number;
  label: string;
  pathNodes: Node[];
  path: (string | number)[];
  pathLabels: string[];
  loading: boolean;
  loaded: boolean;
  checked: boolean;
  hasChildren: boolean;
  data: Data;
  config: {
    value?: string;
    label?: string;
    children?: string;
    disabled?: string;
    checkStrictly?: boolean;
    lazy?: boolean;
    leaf?: string;
  };
  parent: Node;
  level: string;
  uid: number;
  [key: string]: any;
}
const node = {} as Node;
const data = {} as Data;

defineProps({
  value: {},
  options: Array,
  props: Object,
  size: String,
  placeholder: {
    type: String,
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: Function,
  separator: {
    type: String,
    default: " / ",
  },
  showAllLevels: {
    type: Boolean,
    default: true,
  },
  collapseTags: Boolean,
  debounce: {
    type: Number,
    default: 300,
  },
  beforeFilter: {
    type: Function,
    default: () => () => {},
  },
  popperClass: String,
});

defineEmits<{
  (e: "change", value: any): void;
  (e: "expand-change", value: any[]): void;
  (e: "blur", event: FocusEvent): void;
  (e: "focus", event: FocusEvent): void;
  (e: "visible-change", visible: boolean): void;
  (e: "remove-tag", value: any): void;
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
