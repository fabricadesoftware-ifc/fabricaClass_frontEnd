<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const email = ref(null);
const password = ref(null);

const login = async () => {
  try {
  const user = {
    email: email.value,
    password: password.value
  }
  await userStore.login(user);
  if(user) {
  router.push({ name: 'home' });
  console.log('logado lindao', user.email)
}
}
 catch{
  console.log('deu erro seu gay')
 }
}

const showPassword = ref(false)
</script>
<template>
  <div class="m-auto w-1/2 flex flex-col bg-white h-screen justify-center items-center gap-6">
    <div>
      <img src="/logo-tela-branca.png" alt="Logo fábrica de software">
    </div>
    <div class="flex flex-col h-1/2 text-start w-2/3 gap-3">
      <h1 class="text-3xl font-bold text-start">Login</h1>
      <p class="text-lg text-start font-light">Ainda não tem uma conta? 
        <RouterLink :to="{ name: 'signup' }">
          <span class="text-cyan cursor-pointer">Registre-se</span>!
        </RouterLink>
      </p>
      <div class="flex flex-col gap-5">
        <div class="relative flex items-center">
          <i class="fa-solid fa-envelope absolute pl-4 text-2xl"></i>
          <input v-model="email" type="email" placeholder="Email" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12">
        </div>
        <div class="relative flex items-center ">
          <i class="fa-solid fa-lock  absolute pl-4 text-2xl"></i>
          <div class="w-full relative flex items-center">
            <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Senha" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12">
            <i class="fa-solid fa-eye absolute text-2xl justify-self-end right-0 mr-4 cursor-pointer" @click="showPassword = !showPassword"></i>
          </div>
        </div>
      </div>
      <RouterLink :to="{ name: 'forgotPassword' }">
      <p class="text-end text-cyan font-light cursor-pointer">Esqueceu a senha?</p>
      </RouterLink>
      <button @click="login()" class="bg-cyan p-4 rounded-2xl text-xl text-white font-black">Login </button>
    </div>
  </div>
  
</template>