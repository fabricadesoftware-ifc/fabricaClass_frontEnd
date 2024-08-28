<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/auth/user';
import { useRouter } from 'vue-router';
import AuthInputComp from '../../components/others/AuthInputComp.vue';

const typebutton = ref('password')
const typeicon = ref('bx-hide')
const typebutton2 = ref('password')
const typeicon2 = ref('bx-hide')
function typetrade(){
  if(typebutton.value == 'password'){typebutton.value = 'text', typeicon.value = 'bx-show-alt'}else{ typebutton.value = 'password', typeicon.value = 'bx-hide'}
}
function typetrade2(){
  if(typebutton2.value == 'password'){typebutton2.value = 'text', typeicon2.value = 'bx-show-alt'}else{ typebutton2.value = 'password', typeicon2.value = 'bx-hide'}
}
</script>
<template>
  <head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  </head>
  <div class="w-screen h-screen flex items-center justify-center bg-icewhite">
    <form class="w-3/6 h-4/6 flex flex-col justify-around">
        <div class="flex flex-col items-center gap-2 mb-6">
          <h1 class="text-4xl font-semibold">Cadastre-se</h1>   
          <h2>Coloque suas informacoes</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col h-13 items-center">
            <AuthInputComp typeinput="email" inputClass="inputEmail w-1/2" />
            <AuthInputComp typeinput="text" inputClass="inputMatricula w-1/2" maxlength=10 id="matricula"/>
            <div class="flex password-config">   
              <AuthInputComp :typeinput="typebutton" inputClass="inputPassword"/>
              <span class="eye-icon" @click="typetrade()"><i class='bx bx-sm' :class="typeicon"></i></span>
            </div>
            <div class="flex password-config">   
              <AuthInputComp :typeinput="typebutton2" inputClass="inputConfirmPassword" />
              <span class="eye-icon" @click="typetrade2()"><i class='bx bx-sm' :class="typeicon2"></i></span>
            </div>
            <div class="w-1/2 text-end -translate-y-8">
            </div>  
          </div>
        </div>
        <div class="flex flex-col items-center gap-5">
          <input type="submit" value="Criar conta" class="w-1/2 h-14 bg-black rounded-full text-white text-md font-medium cursor-pointer">
          <span>Já possui conta? <router-link class="font-semibold cursor-pointer" to="/login">Login</router-link></span>
        </div>
    </form>
  </div>
</template>
<style scoped>
.password-config{
  display: flex ;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 50%;
}
.eye-icon{
  user-select: none;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  text-align: end;
  top: 20px;
  right: 20px;
}
</style>