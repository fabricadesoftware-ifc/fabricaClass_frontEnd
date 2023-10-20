import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')    
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')   
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')    
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('../views/ForgotPasswordView.vue')
    } 
  ]
})

export default router
