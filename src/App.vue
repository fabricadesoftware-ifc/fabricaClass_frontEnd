<script setup>
import { RouterView } from 'vue-router';
import HeaderComp from './components/HeaderComp.vue';
</script>
<template>
  <div class="font-Inter bg-white font-black flex flex-col min-h-screen ">
    <RouterView/>
    <HeaderComp/>
  </div>
</template>