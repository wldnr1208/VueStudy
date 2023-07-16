<template>
  <li>{{ name }}?!</li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 50px;
  color: red;
}
</style>
