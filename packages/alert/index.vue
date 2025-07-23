<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "info",
  },
  closable: {
    type: Boolean,
    default: true,
  },
  closeText: {
    type: String,
    default: "",
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    default: "light",
  },
});

defineEmits<{
  /** 关闭时触发 */
  (e: "close"): void;
}>();
</script>
