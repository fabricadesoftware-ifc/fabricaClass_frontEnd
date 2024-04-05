import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useUserStore } from './stores/user'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
 
const userStore = useUserStore()

const user = () => {
  return userStore.logged;
}

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth && !user) {
    next({ name: 'login' }) 
    console.log(user)
  } else {
    next()
  }
})
app.use(router)
app.mount('#app')
