<template>
  <slot name="append"></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 显示的数据
   */
  data?: any[];
  /**
   * Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。
   */
  height?: number | string;
  /**
   * Table 的最大高度。合法的值为数字或者单位为 px 的高度。
   */
  maxHeight?: number | string;
  /**
   * 是否为斑马纹 table
   */
  stripe?: boolean;
  /**
   * 是否带有纵向边框
   */
  border?: boolean;
  /**
   * Table 的尺寸
   */
  size?: "medium" | "small" | "mini";
  /**
   * 列的宽度是否自撑开
   *
   * @default true
   */
  fit?: boolean;
  /**
   * 是否显示表头
   *
   * @default true
   */
  showHeader?: boolean;
  /**
   * 是否要高亮当前行
   */
  highlightCurrentRow?: boolean;
  /**
   * 是否要高亮复选框选中行（仅针对开启 selection 有效）
   */
  highlightSelectionRow?: boolean;
  /**
   * 当前行的 key，只写属性
   */
  currentRowKey?: string | number;
  /**
   * 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
   */
  rowClassName?: (row: any, index: number) => string;
  /**
   * 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
   */
  rowStyle?: (row: any, index: number) => Record<string, string>;
  /**
   * 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
   */
  cellClassName?: (
    row: any,
    column: any,
    rowIndex: number,
    columnIndex: number
  ) => string;
  /**
   * 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。
   */
  cellStyle?: (
    row: any,
    column: any,
    rowIndex: number,
    columnIndex: number
  ) => Record<string, string>;
  /**
   * 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
   */
  headerRowClassName?: (row: any, index: number) => string;
  /**
   * 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。
   */
  headerRowStyle?: (row: any, index: number) => Record<string, string>;
  /**
   * 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。
   */
  headerCellClassName?: (
    row: any,
    column: any,
    rowIndex: number,
    columnIndex: number
  ) => string;
  /**
   * 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。
   */
  headerCellStyle?: (
    row: any,
    column: any,
    rowIndex: number,
    columnIndex: number
  ) => Record<string, string>;
  /**
   * 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。
   */
  rowKey?: (row: any) => string | number;
  /**
   * 空数据时显示的文本内容，也可以通过 slot="empty" 设置
   */
  emptyText?: string;
  /**
   * 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效
   */
  defaultExpandAll?: boolean;
  /**
   * 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。
   */
  expandRowKeys?: string[];
  /**
   * 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序
   */
  defaultSort?: {
    prop: string;
    order?: "ascending" | "descending";
  };
  /**
   * tooltip effect 属性
   */
  tooltipEffect?: "dark" | "light";
  /**
   * 是否在表尾显示合计行
   */
  showSummary?: boolean;
  /**
   * 自定义的合计计算方法
   */
  summaryMethod?: (columns: any[], data: any[]) => any[];
  /**
   * 合并行或列的计算方法
   */
  spanMethod?: (
    row: any,
    column: any,
    rowIndex: number,
    columnIndex: number
  ) => {
    rowspan: number;
    colspan: number;
  };
  /**
   * 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行
   */
  selectOnIndeterminate?: boolean;
  /**
   * 展示树形数据时，树节点的缩进
   */
  indent?: number;
  /**
   * 是否懒加载子节点数据
   */
  lazy?: boolean;
  /**
   * 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息
   */
  load?: (row: any, treeNode: any, resolve: (data: any[]) => void) => void;
  /**
   * 渲染嵌套数据的配置选项
   */
  treeProps?: {
    hasChildren?: string;
    children?: string;
  };
}>();

defineEmits<{
  (e: "select", selection: any[], row: any): void;
  (e: "select-all", selection: any[]): void;
  (e: "selection-change", selection: any[]): void;
  (e: "cell-mouse-enter", row: any, column: any, cell: any, event: any): void;
  (e: "cell-mouse-leave", row: any, column: any, cell: any, event: any): void;
  (e: "cell-click", row: any, column: any, cell: any, event: any): void;
  (e: "cell-dblclick", row: any, column: any, cell: any, event: any): void;
  (e: "row-click", row: any, column: any, event: any): void;
  (e: "row-contextmenu", row: any, column: any, event: any): void;
  (e: "row-dblclick", row: any, column: any, event: any): void;
  (e: "header-click", column: any, event: any): void;
  (e: "header-contextmenu", column: any, event: any): void;
  (e: "sort-change", column: any, prop: any, order: any): void;
  (e: "filter-change", filters: any[]): void;
  (e: "current-change", currentRow: any, oldCurrentRow: any): void;
  (e: "header-dragend", newWidth: any, oldWidth: any, column: any, event: any): void;
  (e: "expand-change", row: any, expandedRows: any): void;
}>();

/**
 * 用于多选表格，清空用户的选择
 */
function clearSelection() {}
/**
 * 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
 */
function toggleRowSelection(row: any, selected: boolean) {}
/**
 * 用于多选表格，切换所有行的选中状态
 */
function toggleAllSelection() {}
/**
 * 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）
 */
function toggleRowExpansion(row: any, expanded: boolean) {}
/**
 * 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。
 */
function setCurrentRow(row: any) {}
/**
 * 用于清空排序条件，数据会恢复成未排序的状态
 */
function clearSort() {}
/**
 * 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件
 */
function clearFilter(columnKey: string[]) {}
/**
 * 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法
 */
function doLayout() {}
/**
 * 手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。
 */
function sort(prop: string, order?: "ascending" | "descending") {}

defineExpose({
  clearSelection,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
});
</script>
