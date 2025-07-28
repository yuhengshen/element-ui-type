<template>
  <slot :option="option"></slot>
  <slot name="left-footer"></slot>
  <slot name="right-footer"></slot>
</template>

<script setup lang="ts">
let option: any;

defineProps<{
  /**
   * 绑定值
   */
  value?: string[];
  /**
   * Transfer 的数据源
   * 
   * @default []
   */
  data?: { key: string; label: string; disabled: boolean }[];
  /**
   * 是否可搜索
   * 
   * @default false
   */
  filterable?: boolean;
  /**
   * 搜索框占位符
   * 
   * @default "请输入搜索内容"
   */
  filterPlaceholder?: string;
  /**
   * 自定义搜索方法
   */
  filterMethod?: (query: string, item: { key: string; label: string; disabled: boolean }) => boolean;
  /**
   * 右侧列表元素的排序策略
   * 
   * @default "original"
   */
  targetOrder?: 'original' | 'push' | 'unshift';
  /**
   * 自定义列表标题
   * 
   * @default ["列表 1", "列表 2"]
   */
  titles?: string[];
  /**
   * 自定义按钮文案
   * 
   * @default []
   */
  buttonTexts?: string[];
  /**
   * 自定义数据项渲染函数
   */
  renderContent?: (h: any, option: { key: string; label: string; disabled: boolean }) => any;
  /**
   * 列表顶部勾选状态文案
   * 
   * @default { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }
   */
  format?: { noChecked: string; hasChecked: string };
  /**
   * 数据源的字段别名
   * 
   * @default { key: 'key', label: 'label', disabled: 'disabled' }
   */
  props?: { key: string; label: string; disabled: string };
  /**
   * 初始状态下左侧列表的已勾选项的 key 数组
   * 
   * @default []
   */
  leftDefaultChecked?: string[];
  /**
   * 初始状态下右侧列表的已勾选项的 key 数组
   * 
   * @default []
   */
  rightDefaultChecked?: string[];
}>();

/**
 * 	清空某个面板的搜索关键词
 * @param 指定需要清空的面板
 */
function clearQuery(type: 'left' | 'right') {}

defineExpose({
  clearQuery
})

defineEmits<{
  (e: 'change', value: string[], direction: 'left' | 'right', movedKeys: string[]): void;
  (e: 'left-check-change', checkedKeys: string[], indeterminateKeys: string[]): void;
  (e: 'right-check-change', checkedKeys: string[], indeterminateKeys: string[]): void;
}>();
</script>