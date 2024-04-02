import { defineStore } from 'pinia'
import axios from 'axios'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useStorage('user', null),
    logged: false,
    router: useRouter()
  }),
  actions: {
    async login(user) {
      const { data } = await axios.post('http://127.0.0.1:8000/api/login/', user)
      this.user = data
      this.logged = true
      console.log("login :)", this.user)
    },
    async register(user) {
      const { data } = await axios.post('http://127.0.0.1:8000/api/cadastro/', user)
      this.user = data
      console.log("register :)", this.user)
    },
    async logout() {
      this.user = null
      this.logged = false
      this.router.push('/')
      console.log("logout :)")
    }
  }
})