import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Analyze from '../views/Analyze.vue'
import History from '../views/History.vue'
import Result from '../views/Result.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

    {
      path: '/analyze',
      name: 'Analyze',
      component: Analyze
    }
,
    {
      path: '/history',
      name: 'History',
      component: History
    },

    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
