<script setup lang="ts">

defineProps<{
  /**
   * 消息提示类型
   */
  type: "success" | "info" | "warning" | "danger";
  /**
   * 是否可关闭
   * @default false
   */
  closable: boolean;
  /**
   * 是否禁用渐变动画
   * @default false
   */
  disableTransitions: boolean;
  /**
   * 是否有边框描边
   * @default false
   */
  hit: boolean;
  /**
   * 背景色
   */
  color: string;
  /**
   * 尺寸
   */
  size: "medium" | "small" | "mini";
  /**
   * 主题
   * @default light
   */
  effect: "dark" | "light" | "plain";
}>()

defineEmits<{
  (e: "click"): void;
  (e: "close"): void;
}>()
</script>