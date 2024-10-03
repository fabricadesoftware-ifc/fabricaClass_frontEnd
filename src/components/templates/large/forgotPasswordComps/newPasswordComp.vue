<script setup>
import AuthInputComp from '../../../others/AuthInputComp.vue'
import { ref } from 'vue';
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
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  </head>
  <div class="bg-white w-screen h-screen flex justify-center items-center">
    <div class="flex flex-col bg-icewhite w-1/2 justify-between items-center p-14 rounded-3xl gap-5">
      <div class="flex flex-col items-center w-3/4">
        <h1 class="text-3xl font-semibold text-center">Digite nova senha</h1>
      </div>
      <div class="flex rounded-xl p-3 gap-2 flex-col w-3/5">
        <div class="flex w-full password-config">
          <AuthInputComp :typeinput="typebutton" inputClass="inputPassword w-full" />
          <span class="eye-icon" @click="typetrade()"><i class="bx bx-sm" :class="typeicon"></i></span>
        </div>
        <div class="flex w-full password-config">
          <AuthInputComp :typeinput="typebutton2" inputClass="inputConfirmPassword w-full" />
          <span class="eye-icon" @click="typetrade2()"><i class="bx bx-sm" :class="typeicon2"></i></span>
        </div>
      </div>
      <button class="bg-black w-5/6 h-14 rounded-full text-white font-semibold">Enviar</button>
    </div>
  </div>
</template>
<style scoped>
.password-config{
  display: flex ;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
}
.eye-icon {
  user-select: none;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  text-align: end;
  top: 20px;
  right: 20px;
}
</style>
