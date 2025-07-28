<script setup lang="ts">
defineProps<{
  /**
   * 是否使用原生滚动
   * 
   * @default false
   */
  native?: boolean
  /**
   * 包裹容器的样式
   */
  wrapStyle?: Record<string, string>
  /**
   * 包裹容器的类名
   */
  wrapClass?: string
  /**
   * 视图容器的类名
   */
  viewClass?: string
  /**
   * 视图容器的样式
   */
  viewStyle?: Record<string, string>
  /**
   * 如果 container 尺寸不会发生变化，最好设置它可以优化性能
   * 
   * @default false
   */
  noresize?: boolean;
  /**
   * 包裹容器的标签
   * 
   * @default "div"
   */
  tag?: string
}>()
</script>
