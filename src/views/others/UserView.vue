<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth/auth';


const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
    router.push({ name: 'login' });
    authStore.logout()   
}; 

</script>
<template>
<div>
    <button  @click="logout">
        Sair
    </button>
</div>
</template>

<style></style>