import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import { useRouter } from "vue-router";

export const useAuthStore = defineStore('auth', () =>{
    const router = useRouter();
    const state = useStorage('token', {
        accessToken: null,
        refreshToken: null,
        logged: null,
        data: null,
    });
    
    const setAccessToken = (data) => {
        state.value.accessToken = data.token;
        state.value.refreshToken = data.refresh; 
        state.value.logged = data.logged;
        router.push('/');
    };

    const logout = () => {
        state.value.accessToken = null;
        state.value.refreshToken = null;
        state.value.logged = null;
    };

    return {
        state,
        setAccessToken,
        logout,
    };
});