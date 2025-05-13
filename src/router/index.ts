import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import BrueckenRaetsel from '@/views/BrueckenRaetsel.vue'
import SolutionPage from '@/views/SolutionPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/BrueckenRaetsel',
      name: 'BrueckenRaetsel',
      component: BrueckenRaetsel
    },
    {
      path: '/SolutionPage',
      name: 'SolutionPage',
      component: SolutionPage
    }
  ]
})

export default router
