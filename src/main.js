import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/plugins/axios'
import { useAuthStore } from './stores/auth/auth';

const app = createApp(App)

app.use(createPinia())
 
app.use(router)
app.mount('#app')

const authStore = useAuthStore();

const auth = () => {
  return authStore.state.logged;
};

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth()) {
    next({ name: 'login' }) 
  } else {
    next()
  }
});