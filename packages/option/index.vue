<script setup lang="ts">
defineProps<{
  /**
   * 选项的值
   */
  value?: string | number | object;
  /**
   * 选项的标签，若不设置则默认与 value 相同
   */
  label?: string | number;
  /**
   * 是否禁用该选项
   * @default false
   */
  disabled?: boolean;
}>();

</script>
