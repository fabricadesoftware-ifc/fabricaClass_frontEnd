
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
      requiresAuth: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      meta: {
        requiresAuth: true
        }
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormPageView.vue'),
      meta: {
      requiresAuth: true
        }
    }
  ]
});




export default router
