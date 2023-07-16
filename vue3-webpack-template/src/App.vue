<template>
  <h1 @click="increase">{{ count }}</h1>
  <div v-if="count > 4">4보다 큽니다</div>

  <!-- fruits 3개 배열의 내용을 fruit에 할당 그 후에 {{ fruit }} 이렇게 출력시킴 key고유값도 설정(map이랑 같은듯)-->
  <ul>
    <hello v-for="fruit in fruits" :key="fruit" :name="fruit">{{
      fruit
    }}</hello>
  </ul>
</template>

<script>
import Fruit from "~/components/Fruit";

export default {
  components: {
    hello: Fruit,
  },
  data() {
    return { count: 0, fruits: ["Apple", "Banan", "Cherry"] };
  },
  methods: {
    increase() {
      this.count += 1;
    },
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 50px;
  color: royalblue;
}
ul {
  li {
    font-size: 40px;
  }
}
</style>
