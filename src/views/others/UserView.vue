<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth/auth';
import LargeHeaderComp from '../../components/templates/large/LargeHeaderComp.vue';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
    router.push({ name: 'login' });
    authStore.logout()   
}; 

</script>
<template>
<LargeHeaderComp />
<div>
    <button  @click="logout">
        Sair
    </button>
</div>
</template>

<style></style>