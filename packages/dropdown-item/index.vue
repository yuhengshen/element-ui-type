<script lang="ts" setup>
defineProps<{
  /**
   * 指令
   */
  command?: string | number | object;
  /**
   * 禁用
   * 
   * @default false
   */
  disabled?: boolean;
  /**
   * 显示分割线
   * 
   * @default false
   */
  divided?: boolean;
  /**
   * 图标类名
   */
  icon?: string;
}>();

</script>
