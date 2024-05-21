<script setup>
import { RouterView, useRoute } from 'vue-router';
import { useScreen } from './composables/screen';


const { menu } = useScreen();
const route = useRoute();

const offHeader = () => {
  if (route.name == 'login' || route.name == 'signup' || route.name == 'forgotPassword') {
    return true;
  }
};
</script>

<template>
<div> 
  <div v-if="offHeader()"> 
  </div>
    <component :is="menu" v-else/>
    <main class="font-Inter bg-white font-black flex flex-col min-h-screen pt-20"> 
      <RouterView/>
    </main>
</div>
</template>