<template>
  <div>
    <input
    placeholder="newTodo"
    type="text"
    class="input"
    :value="val"
    v-on="listeners">
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  props: {
    val: {
      type: String,
      default: ''
    }
  },
  methods: {
    add () {
      this.$emit('add')
    }
  },
  updated () {
    // console.log(...this.$listeners)
  },
  computed: {
    listeners () {
      // console.log({ ...this.$listeners })
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .input {
    width: 50%;
    height: 50px;
  }
  button {
    margin-left: 10px;
    width: 80px;
    height: 50px;
  }
</style>
