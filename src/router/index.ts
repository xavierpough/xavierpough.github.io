import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Frontend/HomeView.vue'
import ActorHomePage from '@/views/Actor/ActorHomePage.vue'
import FrontEndResume from '@/components/Frontend/FrontEndResume.vue'
import AppleHubHomePage from '@/views/Apple/AppleHubHomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/frontend-resume',
      name: 'frontend-resume',
      component: FrontEndResume
      
    },
    {
      path: '/actor',
      name: 'actor',
      component: ActorHomePage
    },
    {
      path: '/apple-hub',
      name: 'apple-hub',
      component: AppleHubHomePage
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // When using the browser's back/forward button, restore saved position
      return savedPosition;
    } else {
      // Scroll to top for new navigation
      return { top: 0 };
    }
  },
})

export default router
