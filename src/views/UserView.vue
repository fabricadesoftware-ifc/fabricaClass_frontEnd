<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const user = computed(() => userStore.user)
const logged = computed(() => userStore.logged)
const router = useRouter()

const logout = () => {
    router.push({ name: 'login' });
    userStore.logout()   
};

</script>
<template>
<div v-if="logged">
    {{ user.email }}
</div>
<div>
    <button class="" v-if="logged" @click="logout">
        Sair
    </button>
</div>

</template>

<style></style>