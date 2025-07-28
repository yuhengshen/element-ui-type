<script setup lang="ts">
defineProps<{
  space?: number | string;
  /**
   * 显示方向
   *
   * @default "horizontal"
   */
  direction?: "vertical" | "horizontal";
  /**
   * 设置当前激活步骤
   * 
   * @default 0
   */
  active?: number;
  /**
   * 设置当前步骤的状态
   * 
   * @default "process"
   */
  processStatus?: "wait" | "process" | "finish" | "error" | "success";
  /**
   * 设置结束步骤的状态
   * 
   * @default "finish"
   */
  finishStatus?: "wait" | "process" | "finish" | "error" | "success";
  /**
   * 进行居中对齐
   */
  alignCenter?: boolean;
  /**
   * 是否应用简洁风格
   * 
   * @default false
   */
  simple?: boolean;
}>();
</script>
