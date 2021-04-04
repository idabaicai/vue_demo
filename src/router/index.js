import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import BaseLayout from '../views/more/BaseLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/TodoList.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('../views/ModalShow.vue')
  },
  {
    path: '/state',
    name: 'state',
    component: () => import('../views/StateManagement.vue')
  },
  {
    path: '/form-create',
    name: 'formCreate',
    component: () => import('../views/form_create/FormCreate1.vue')
  },
  {
    path: '/vxe-table',
    name: 'vxe-table',
    component: () => import('../views/vxe_table/VxeTable.vue')
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../views/more/BaseLayout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
