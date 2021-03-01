<template>
  <div>
    <BaseInput
      v-model="newTodoText"
      @keydown.enter="addTodo"
      @add="add"
      :val="newTodoText"
      />
      <ul v-if="todos.length">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo"
        />
      </ul>
  </div>
</template>
<script>
import BaseInput from './BaseInputText.vue'
import TodoItem from './TodoListItem'
let nextTodo = 0
export default {
  data () {
    return {
      newTodoText: '',
      todos: [
        { id: nextTodo++, text: 'Vue' },
        { id: nextTodo++, text: 'TS' },
        { id: nextTodo++, text: 'VueX' }
      ]
    }
  },
  components: {
    BaseInput,
    TodoItem
  },
  methods: {
    add () {
      this.addTodo()
    },
    addTodo () {
      const trimmedText = this.newTodoText.trim()
      if (trimmedText) {
        this.todos.push({
          id: nextTodo++,
          text: trimmedText
        })
      }
      this.trimmedText = ''
    },
    removeTodo (idToRemove) {
      this.todos = this.todos.filter(val => {
        return val.id !== idToRemove
      })
    }
  }
}
</script>
