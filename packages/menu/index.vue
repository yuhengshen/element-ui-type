<script lang="ts" setup>
defineProps<{
  /**
   * 模式
   *
   * @default "vertical"
   */
  mode?: "horizontal" | "vertical";
  /**
   * 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
   *
   * @default false
   */
  collapse?: boolean;
  /**
   * 菜单的背景色（仅支持 hex 格式）
   *
   * @default "#ffffff"
   */
  backgroundColor?: string;
  /**
   * 菜单的文字颜色（仅支持 hex 格式）
   *
   * @default "#303133"
   */
  textColor?: string;
  /**
   * 当前激活菜单的文字颜色（仅支持 hex 格式）
   *
   * @default "#409EFF"
   */
  activeTextColor?: string;
  /**
   * 当前激活菜单的 index
   */
  defaultActive?: string;
  /**
   * 当前打开的 sub-menu 的 index 的数组
   */
  defaultOpeneds?: string[];
  /**
   * 是否只保持一个子菜单的展开
   *
   * @default false
   */
  uniqueOpened?: boolean;
  /**
   * 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)
   * @default "hover"
   */
  menuTrigger?: "hover" | "click";
  /**
   * 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
   *
   * @default false
   */
  router?: boolean;
  /**
   * 是否开启折叠动画
   *
   * @default true
   */
  collapseTransition?: boolean;
}>();

/**
 * 展开指定的 sub-menu
 *
 * @param index 需要打开的 sub-menu 的 index
 */
function open(index: string) {}

/**
 * 收起指定的 sub-menu
 *
 * @param index 需要收起的 sub-menu 的 index
 */
function close(index: string) {}

defineExpose({
  open,
  close,
})

defineEmits<{
  (e: "select", index: string, indexPath: string[]): void;
  (e: "open", index: string, indexPath: string[]): void;
  (e: "close", index: string, indexPath: string[]): void;
}>();
</script>
