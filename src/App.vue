<script setup>
import { RouterView } from 'vue-router';
import { useScreen } from './composables/screen';

const { menu } = useScreen();

</script>

<template>
  <div>
    <!-- <component :is="menu"/> -->
    <!-- <main class="font-Inter bg-white font-black flex flex-col min-h-screen pt-20"> 
    </main> -->
  <RouterView/>
</div>
</template>