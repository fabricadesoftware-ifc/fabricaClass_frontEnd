<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth/auth';
import { computed } from 'vue';

const authStore = useAuthStore();
const user = computed(() => authStore.data);
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
<div>
   {{ user }}
</div>

</template>

<style></style>