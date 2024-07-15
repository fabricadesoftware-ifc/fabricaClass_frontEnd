<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/auth/user';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const email = ref(null);
const password = ref(null);
const showPassword = ref(false);
const router = useRouter();


const login = async () => {
  try {
    await userStore.postLogin({
    email: email.value,
    password: password.value
  });

  router.push({ name: 'home' });
}
 catch (error){
  router.push({ name: 'home' });
  console.log('erro ao logar')
  
 }
};

</script>
<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <form class="w-3/6 h-4/6 flex flex-col justify-around">
        <div class="flex flex-col items-center gap-3">
          <h1 class="text-5xl">Login</h1>
          <h2>Coloque suas informacoes</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col h-13 items-center gap-9 mb-6">
            <div class="inputBase w-1/2">
              <input type="email" class="w-full h-full rounded-xl indent-5 text-xl">
            </div>
            <div class="inputBase w-1/2">
              <input type="password" class="w-full h-full rounded-xl indent-5 text-xl">
            </div>
          </div>
          <input type="button" value="Esqueceu sua senha?">
        </div>
        <div>
          <input type="submit" value="Login">
          <span>Nao tem conta? <input type="button" value="Cadastre-se"></span>
        </div>
    </form>
  </div>
</template>
<style scoped>
.inputBase::before{
  content: 'teste';
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
  transform: translate(10px,-60px);
}
</style>