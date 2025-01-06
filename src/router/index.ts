import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ZehnBruecken from '../views/ZehnBruecken.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage.vue
    },
    {
      path: '/ZehnBruecken',
      name: 'ZehnBruecken',
      component: ZehnBruecken.vue
    }
  ]
})

export default router
