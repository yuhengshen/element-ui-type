<template>
  <slot name="prepend"></slot>
  <slot name="append"></slot>
  <slot name="prefix"></slot>
  <slot name="suffix"></slot>
  <slot :item="item">
    {{ item[valueKey] }}
  </slot>
</template>
<script setup lang="ts">
const item = {} as { value: string; [key: string]: any };

defineEmits<{
  (e: "input", value: string): void;
  (e: "change", value: string): void;
  (e: "focus", event: FocusEvent): void;
  (e: "blur", event: FocusEvent): void;
  (e: "clear"): void;
  (e: "select", item: { value: string; [key: string]: any }): void;
}>();

defineProps({
  valueKey: {
    type: String,
    default: "value",
  },
  popperClass: String,
  popperOptions: Object,
  placeholder: String,
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
  name: String,
  size: String,
  value: String,
  maxlength: Number,
  minlength: Number,
  autofocus: Boolean,
  fetchSuggestions: Function,
  triggerOnFocus: {
    type: Boolean,
    default: true,
  },
  customItem: String,
  selectWhenUnmatched: {
    type: Boolean,
    default: false,
  },
  prefixIcon: String,
  suffixIcon: String,
  label: String,
  debounce: {
    type: Number,
    default: 300,
  },
  placement: {
    type: String,
    default: "bottom-start",
  },
  hideLoading: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: true,
  },
  highlightFirstItem: {
    type: Boolean,
    default: false,
  },
});
</script>
