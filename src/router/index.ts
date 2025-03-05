import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BrueckenRaetsel from '../views/BrueckenRaetsel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage.vue
    },
    {
      path: '/BrueckenRaetsel',
      name: 'BrueckenRaetsel',
      component: BrueckenRaetsel.vue
    }
  ]
})

export default router
