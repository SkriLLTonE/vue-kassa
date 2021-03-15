import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Sclad',
    name: 'Sclad',
    component: () => import('../views/Sclad.vue')
  },
{
    path: '/Static',
        name: 'Static',
    component: () => import('../views/Static.vue')
},
    {
        path: '/Add',
        name: 'Add',
        component: () => import('../views/Add.vue')
    },
{
    path: '/Login',
        name: 'Login',
    component: () => import('../views/Login.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
