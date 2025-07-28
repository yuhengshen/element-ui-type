<script setup lang="ts">
defineProps<{
  /**
   * 唯一标志
   * 
   * @default null
   */
  index?: string;
  /**
   * 弹出菜单的自定义类名
   */
  popperClass?: string;
  /**
   * 展开 sub-menu 的延时
   * 
   * @default 300
   */
  showTimeout?: number;
  /**
   * 收起 sub-menu 的延时
   * 
   * @default 300
   */
  hideTimeout?: number;
  /**
   * 是否禁用
   * 
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性
   * 
   * @default '一级子菜单：true / 非一级子菜单：false'
   */
  popperAppendToBody?: boolean;
}>();
</script>
