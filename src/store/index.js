import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'Vue', done: true },
      { id: 2, text: 'React', done: false },
      { id: 3, text: 'Angular', done: false }
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
  },
  modules: {
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
