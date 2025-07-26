<template>
  <slot></slot>
  <slot name="title"></slot>
</template>
<script setup lang="ts">
defineProps<{
  /**
   * 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true
   * @default false
   */
  appendToBody?: boolean;
  /**
   * 关闭前的回调，会暂停 Drawer 的关闭
   */
  beforeClose?: (done: () => void) => void;
  /**
   * 是否可以通过按下 ESC 关闭 Drawer
   * @default true
   */
  closeOnPressEscape?: boolean;
  /**
   * Drawer 的自定义类名
   */
  customClass?: string;
  /**
   * 控制是否在关闭 Drawer 之后将子元素全部销毁
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 是否需要遮罩层
   * @default true
   */
  modal?: boolean;
  /**
   * 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上
   * @default true
   */
  modalAppendToBody?: boolean;
  /**
   * Drawer 打开的方向
   * @default rtl
   */
  direction?: "rtl" | "ltr" | "ttb" | "btt";
  /**
   * 是否显示关闭按钮
   * @default true
   */
  showClose?: boolean;
  /**
   * Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释
   * @default '30%'
   */
  size?: number | string;
  /**
   * Drawer 的标题，也可通过具名 slot （见下表）传入
   */
  title?: string;
  /**
   * 是否显示 Drawer，支持 .sync 修饰符
   * @default false
   */
  visible?: boolean;
  /**
   * 点击遮罩层是否可以关闭 Drawer
   * @default true
   */
  wrapperClosable?: boolean;
  /**
   * 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效
   * @default true
   */
  withHeader?: boolean;
}>();

defineEmits<{
  (e: "open"): void;
  (e: "opened"): void;
  (e: "close"): void;
  (e: "closed"): void;
}>();

/**
 * 用于关闭 Drawer, 该方法会调用传入的 before-close 方法
 */
function closeDrawer() {}

defineExpose({
  closeDrawer,
});
</script>
