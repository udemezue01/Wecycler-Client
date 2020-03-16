import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

//components

import MaterialList from '../components/Material-List.vue'

Vue.use(VueRouter)

const routes = [

{
  path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Landing',
    component: Landing
  },
 {
    path: '/material-list',
    name: 'MaterialList',
    component: MaterialList
  },


  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
