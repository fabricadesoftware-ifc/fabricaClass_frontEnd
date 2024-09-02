<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/auth/user';
import { useRouter } from 'vue-router';
import AuthInputComp from '../../components/others/AuthInputComp.vue';

const user = ref({
  email: '',
  password: ''
})

// show password
const typebutton = ref('password')
const typeicon = ref('bx-hide')
function typetrade() {
  if (typebutton.value == 'password') {
    ; (typebutton.value = 'text'), (typeicon.value = 'bx-show-alt')
  } else {
    ; (typebutton.value = 'password'), (typeicon.value = 'bx-hide')
  }
}
// end show password




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
        <div class="flex flex-col items-center">
          <div class="flex flex-col h-13 items-end w-1/2">
            <AuthInputComp typeinput="email" inputClass="inputEmail w-full" v-model="user.email" />
            <div class="flex password-config">
              <AuthInputComp :typeinput="typebutton" inputClass="inputPassword w-full" v-model="user.password" />
              <span class="eye-icon" @click="typetrade()"><i class='bx bx-sm' :class="typeicon"></i></span>
            </div>
            <div class="w-1/2 text-end -translate-y-8">
              <router-link class="text-xs self-end cursor-pointer" to="/forgotPassword">Esqueceu sua senha?</router-link>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-5">
          <input type="submit" value="Login" class="w-1/2 h-14 bg-black rounded-full text-white text-md font-medium cursor-pointer">
          <span>Nao tem conta? <router-link class="font-semibold cursor-pointer" to="/signup">Cadastre-se</router-link></span>
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
  width: 100%;
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