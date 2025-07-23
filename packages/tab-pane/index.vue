<script setup lang="ts">
defineProps<{
  /**
   * 选项卡标题
   */
  label?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 与选项卡绑定值 value 对应的标识符，表示选项卡别名
   */
  name?: string;
  /**
   * 标签是否延迟渲染
   */
  lazy?: boolean;
}>();
</script>
