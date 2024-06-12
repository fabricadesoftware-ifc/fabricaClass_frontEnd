import { createRouter, createWebHistory } from 'vue-router'
import LayoutFull from '../layouts/LayoutFull.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/professor/HomeProfessorView.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')    
        },
        
        {
          path: '/signup',
          name: 'signup',
          component: () => import('../views/auth/SignupView.vue')    
         },
         {
          path: '/forgotPassword',
          name: 'forgotPassword',
          component: () => import('../views/auth/ForgotPasswordView.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/others/UserView.vue'),
          meta: {
            requiresAuth: true
            }
        },
        {
          path: '/form',
          name: 'form',
          component: () => import('../views/professor/FormProfessorPageView.vue'),
          meta: {
            requiresAuth: true
            }
        },
      ],
    },
  ],
});

export default router





