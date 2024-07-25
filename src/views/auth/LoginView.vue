<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/auth/user';
import { useRouter } from 'vue-router';
import AuthInputComp from '../../components/others/AuthInputComp.vue';

const typebutton = ref('password')
const typeicon = ref('bx-hide')
function typetrade(){
  if(typebutton.value == 'password'){typebutton.value = 'text', typeicon.value = 'bx-show-alt'}else{ typebutton.value = 'password', typeicon.value = 'bx-hide'}
}

</script>
<template>
  <head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  </head>
  <div class="w-screen h-screen flex items-center justify-center bg-icewhite">
    <form class="w-3/6 h-4/6 flex flex-col justify-around">
        <div class="flex flex-col items-center gap-3">
          <h1 class="text-4xl font-semibold">Login</h1>   
          <h2>Coloque suas informacoes</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col h-13 items-center">
            <AuthInputComp typeinput="email" inputClass="inputEmail" />
            <AuthInputComp :typeinput="typebutton" inputClass="inputPassword" />
            <span class="eyeIcon" @click="typetrade()"><i class='bx bx-sm' :class="typeicon"></i></span>
            <div class="w-1/2 text-end -translate-y-8">
              <input type="button" value="Esqueceu sua senha?" class="text-xs self-end">
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-5">
          <input type="submit" value="Login" class="w-1/2 h-14 bg-black rounded-full text-white text-md font-medium">
          <span>Nao tem conta? <router-link class="font-semibold" to="/signup">Cadastre-se</router-link></span>
        </div>
    </form>
  </div>
</template>
<style scoped>
.eyeIcon{
  user-select: none;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  transform: translate(10vw, 15vh);
}
</style>