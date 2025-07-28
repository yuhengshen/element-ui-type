<template>
  <slot></slot>
  <slot name="prev"></slot>
  <slot name="pager"></slot>
  <slot name="next"></slot>
  <slot name="jumper"></slot>
  <slot name="->"></slot>
  <slot name="total"></slot>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * 是否使用小型分页样式
   * 
   * @default false
   */
  small?: boolean
  /**
   * 是否为分页按钮添加背景色
   * 
   * @default false
   */
  background?: boolean
  /**
   * 每页显示条目个数，支持 .sync 修饰符
   * 
   * @default 10
   */
  pageSize?: number
  /**
   * 总条目数
   */
  total?: number
  /**
   * 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性
   */
  pageCount?: number
  /**
   * 页码按钮的数量，当总页数超过该值时会折叠
   */
  pagerCount?: number
  /**
   * 当前页数，支持 .sync 修饰符
   * 
   * @default 1
   */
  currentPage?: number
  /**
   * 组件布局，子组件名用逗号分隔
   * 
   * sizes, prev, pager, next, jumper, ->, total, slot
   */
  layout?: string;
  /**
   * 每页显示个数选择器的选项设置
   */
  pageSizes?: number[]
  /**
   * 每页显示个数选择器的下拉框类名
   */
  popperClass?: string
  /**
   * 替代图标显示的下一页文字
   */
  nextText?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 只有一页时是否隐藏
   */
  hideOnSinglePage?: boolean
}>()

defineEmits<{
  (e: "size-change", pageSize: number): void
  (e: "current-change", currentPage: number): void
  (e: "prev-click", currentPage: number): void
  (e: "next-click", currentPage: number): void
}>()

</script>