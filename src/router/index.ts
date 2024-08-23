import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Frontend/HomeView.vue'
import ActorHomePage from '@/views/Actor/ActorHomePage.vue'
import FrontEndResume from '@/components/Frontend/FrontEndResume.vue'


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
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
