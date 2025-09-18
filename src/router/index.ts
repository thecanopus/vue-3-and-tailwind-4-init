import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: "I'm the home page title defined in Vue Router" }, // Todo: Change this to what you need
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue App' // Todo: Change the text here
  next()
})

export default router
