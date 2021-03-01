<template>
  <div>
    <button @click="getCount" class="button"> get state </button>
    <button @click="increment" class="button"> increment </button>
    <button @click="decrement" class="button"> decrement </button>
    <p>count: {{ count }}</p>
    <h4>state getter</h4>
    <p>all todo: </p>
    <ul>
      <li v-for="todo in todos"
          :key="todo.id"
      >{{ todo.text }}</li>
    </ul>
    <p>done todo</p>
    <ul>
      <li v-for="todo in doneTodo"
          :key="todo.id"
          class="done"
      >{{ todo.text }}</li>
    </ul>
  </div>
</template>
<script>
import Vuex from 'vuex'
console.log(Vuex)
export default {
  methods: {
    getCount () {
      console.log(this.$store.state.count)
    },
    increment () {
      console.log('commit increment')
      this.$store.commit('increment')
    },
    decrement () {
      console.log('commit decrement')
      this.$store.commit('decrement')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    todos () {
      return this.$store.state.todos
    },
    doneTodo () {
      return this.$store.getters.doneTodos
    }
  }
}
</script>
<style lang="less" scoped>
  .button {
    margin: 0 5px;
  }
  .done {
    font-size: 20px;
    color: green;
  }
</style>
