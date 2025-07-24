<template>
  <slot :node="node" :data="data"></slot>
</template>

<script setup lang="ts">
import { Props, Option, Value, Node, Data } from "../cascader/index.vue";

let node: Node;
let data: Data;

defineProps<{
  /**
   * 选中项绑定值
   */
  value?: Value | Value[] | Value[][];
  options?: Option[];
  props?: Props;
}>();

defineEmits<{
  (e: "input", value: Value | Value[] | Value[][]): void;
  (e: "change", value: Value | Value[] | Value[][]): void;
  (e: "expand-change", value: Value[]): void;
}>();

/**
 * @param leafOnly 是否只获取叶子节点
 *
 * @default false
 */
function getCheckedNodes(leafOnly: boolean): Node[] {
  return [];
}

/**
 * 清空选中的节点
 */
function clearCheckedNodes() {}
defineExpose({
  getCheckedNodes,
  clearCheckedNodes,
});
</script>
