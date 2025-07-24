<script setup lang="ts">
defineProps<{
  /**
   * 是否显示 Dialog，支持 .sync 修饰符
   */
  visible?: boolean;
  /**
   * Dialog 的标题
   */
  title?: string;
  /**
   * Dialog 的宽度
   * @default '50%'
   */
  width?: string;
  /**
   * Dialog 的顶部边距
   * @default '15vh'
   */
  top?: string;
  /**
   * 是否需要遮罩层
   * @default true
   */
  modal?: boolean;
  /**
   * 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
   * @default true
   */
  modalAppendToBody?: boolean;
  /**
   * Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
   */
  appendToBody?: boolean;
  /**
   * 是否在 Dialog 出现时将 body 滚动锁定
   * @default true
   */
  lockScroll?: boolean;
  /**
   * Dialog 的自定义类名
   */
  customClass?: string;
  /**
   * 是否可以通过点击 modal 关闭 Dialog
   * @default true
   */
  closeOnClickModal?: boolean;
  /**
   * 是否可以通过按下 ESC 关闭 Dialog
   * @default true
   */
  closeOnPressEscape?: boolean;
  /**
   * 是否显示关闭按钮
   * @default true
   */
  showClose?: boolean;
  /**
   * 关闭前的回调，会暂停 Dialog 的关闭
   */
  beforeClose?: (done: () => void) => void;
  /**
   * 是否对头部和底部采用居中布局
   */
  center?: boolean;
  /**
   * 关闭时销毁 Dialog 中的元素
   */
  destroyOnClose?: boolean;
}>();

defineEmits<{
  /**
   * Dialog 打开的回调
   */
  (e: "open"): void;
  /**
   * Dialog 打开动画结束时的回调
   */
  (e: "opened"): void;
  /**
   * Dialog 关闭的回调
   */
  (e: "close"): void;
  /**
   * Dialog 关闭动画结束时的回调
   */
  (e: "closed"): void;
}>();
</script>

<template>
  <slot></slot>
  <slot name="title"></slot>
  <slot name="footer"></slot>
</template>
