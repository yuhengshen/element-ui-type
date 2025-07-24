<script setup lang="ts">
defineProps<{
  /**
   * 分组的组名
   */
  label?: string;
  /**
   * 是否将该分组下所有选项置为禁用
   * @default false
   */
  disabled?: boolean;
}>();
</script>
