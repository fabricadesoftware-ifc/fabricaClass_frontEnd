import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () =>{
    const state = useStorage('token', {
        accessToken: null,
        refreshToken: null,
        logged: false,
        data: null
    })
    
    const setAccessToken = (data) => {
        state.value.accessToken = data.token;
        state.value.refreshToken = data.refresh; 
        state.value.logged = true;
    }

    const logout = () => {
        state.value.accessToken = null;
        state.value.refreshToken = null;
        state.value.logged = null;
    }
    return {
        state,
        setAccessToken,
        logout
    };
});