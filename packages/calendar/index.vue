<template>
  <slot name="dateCell" :date="date" :data="data"></slot>
</template>
<script setup lang="ts">
type Data = {
  type: "prev-month" | "current-month" | "next-month";
  isSelected: boolean;
  day: string;
};

const date = new Date();
const data = {} as Data;
defineProps({
  value: [Date, String, Number],
  range: {
    type: Array,
  },
  firstDayOfWeek: {
    type: Number,
    default: 1,
  },
});

defineEmits<{
  (e: "input", date: Date): void;
}>();
</script>
