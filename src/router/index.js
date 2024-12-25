import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'OSCOV - The Vedas Open Source Community'
      }
    },
    {
      path: '/code-of-conduct',
      name: 'code-of-conduct',
      meta: {
        title: 'Code Of Conduct | OSCOV'
      },
      component: () => import('../views/CodeView.vue'),
    },
    {
      path: '/discord',
      name: 'documentation',
      beforeEnter(to, from, next) {
        window.location.href = 'https://discord.gg/N7FdTkJZWQ'
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'OSCOV - The Vedas Open Source Community'
  next()
})

export default router