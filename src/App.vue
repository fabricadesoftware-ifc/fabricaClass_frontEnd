<script setup>
import { RouterView, useRoute } from 'vue-router';
import HeaderComp from './components/templates/large/LargeHeaderComp.vue';

const route = useRoute();
const offHeader = () => {
  if (route.name == 'login' || route.name == 'signup' || route.name == 'forgotPassword') {
    return true;
  }
};
</script>
<template>
  <div v-if="offHeader()">
  </div>
  <div v-else>
    <HeaderComp/> 
  </div>
  <div class="font-Inter bg-white font-black flex flex-col min-h-screen ">
    <RouterView/>
  </div>
</template>