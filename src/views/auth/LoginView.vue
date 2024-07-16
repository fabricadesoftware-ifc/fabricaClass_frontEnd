<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/auth/user';
import { useRouter } from 'vue-router';
const passwordView = ref('password')
function tradetype() {
  (passwordView.value == 'password')? passwordView.value == 'text' : passwordView.value == 'password'
}
</script>
<template>
  <div class="w-screen h-screen flex items-center justify-center bg-icewhite">
    <form class="w-3/6 h-4/6 flex flex-col justify-around">
        <div class="flex flex-col items-center gap-3">
          <h1 class="text-4xl font-semibold">Login</h1>
          <h2>Coloque suas informacoes</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col h-13 items-center">
            <div class="inputBase inputEmail w-1/2 mb-9">
              <input type="email" class="w-full h-full rounded-xl indent-5 text-md">
            </div>
            <div class="inputBase inputPassword w-1/2 mb-2">
              <input type="password" class="w-full h-full rounded-xl text-md pr-16 pl-5">
            </div>
            <div class="w-1/2 text-end">
              <input type="button" value="Esqueceu sua senha?" class="text-xs self-end">
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-5">
          <input type="submit" value="Login" class="w-1/2 h-14 bg-black rounded-full text-white text-md font-medium">
          <span>Nao tem conta? <input type="button" value="Cadastre-se" class="font-semibold"></span>
        </div>
    </form>
  </div>
</template>
<style scoped>
.inputEmail::before{
  content: 'email';
  width: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 15px;
  display: block;
  position: absolute;
  background-color: white;
  transform: translate(15px,-10px);
}
.inputPassword::before{
  content: 'senha';
  width: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 15px;
  display: block;
  position: absolute;
  background-color: white;
  transform: translate(15px,-10px);
}
.inputBase{
  border: 1px solid black;
  height: 65px;
  border-radius: 0.75rem;
  z-index: 2;
}
.inputBase::after{
  content: '';
  width: 100%;
  height: 65px;
  display: block;
  position: relative;
  border: 1px solid black;
  border-radius: 0.75rem;
  z-index: -1;
  transform: translate(6px,-60px);
}
</style>