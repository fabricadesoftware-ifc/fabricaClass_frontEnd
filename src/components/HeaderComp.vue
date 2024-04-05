<script setup>
import { useUserStore } from '../stores/user';
import { computed } from 'vue';

const userStore = useUserStore()
const user = computed(() => userStore.user)


</script>
<template>
  <nav class="shadow-lg flex justify-center">
    <div class="flex w-3/5 justify-between items-center">
      <div>
        <router-link to="/">
          <img src="../assets/logo-fabrica.png"/>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i class="fa-solid fa-user text-4xl">
          </i>
          {{ user.email }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style>
</style>
