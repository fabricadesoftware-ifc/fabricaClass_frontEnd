import { defineStore } from 'pinia'
import { register, login } from '../../service/index'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', () => {
    const state = {
      email: '',
      matricula: '',
      tipo_usuario: ''
    };
    const authStore = useAuthStore();
    const postRegister = async (user) => {
      try {
        const userData = await register(user)
        state.email = userData.email
        state.matricula = userData.matricula
        state.tipo_usuario = userData.tipo_usuario
      } catch (error) {
        console.error('Erro ao cadastrar usuário', error)
      }
    };

    const postLogin = async (user) => {
      const { access, email } = await login(user)
      authStore.setAccessToken({ token: access })
      authStore.setAccessToken({ data: email })
      console.log('access', access, 'email', email)
    };

    return {
      state,
      postRegister,
      postLogin
    };
  })

