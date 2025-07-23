<template>
  <slot></slot>
</template>

<script>
export default {
  name: "ElCard",
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
    },
  },
};
</script>
