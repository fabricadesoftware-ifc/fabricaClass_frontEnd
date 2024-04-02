<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const showPassword = ref(false)
const password = ref('')
const afirmPassword = ref('')
const tipo_usuario = ref(null)
const email = ref(null)
const wrongPasswords = ref(false)

const registerUser = async () => {
  const user = {
    email: email.value,
    password: password.value,
    tipo_usuario: tipo_usuario.value
  }
  console.log(tipo_usuario.value)
  if(password.value != afirmPassword.value){
    wrongPasswords.value = true
  }else{
    if (tipo_usuario.value === 1) {
      router.push('/')
      await userStore.register(user)
  } else {
    await userStore.register(user)
    router.push('/login')
  }
  }
}


</script>
<template>
  <div class="m-auto w-1/2 flex flex-col bg-white h-screen items-center gap-6">
    <div class="mt-16">
      <img src="/logo-tela-branca.png" alt="Logo fábrica de software" />
    </div>
    <div class="flex flex-col h-1/2 text-start w-2/3 gap-3">
      <h1 class="text-3xl font-bold text-start">Registre-se</h1>
      <p class="text-lg text-start font-light">
        Já tem uma conta? Faça
        <RouterLink :to="{ name: 'login' }"> <span class="text-cyan">login</span>! </RouterLink>
      </p>

      <div class="flex flex-col gap-6">
        <div class="relative flex items-center">
          <i class="fa-solid fa-envelope absolute pl-4 text-2xl"></i>
          <input
            type="email"
            placeholder="Email"
            class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12"
            v-model="email"
          />
        </div>
        <div class="relative flex items-center">
          <i class="fa-solid fa-user absolute pl-4 text-2xl"></i>
          <input
            type="text"
            placeholder="Matrícula"
            class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12"
          />
        </div>
        <div>
          <label for="tipo_usuario">Escolha seu tipo de usuario:</label>
          <select name="usuario" id="usuario" form="Usuarioform" v-model="tipo_usuario">
            <option value=1>1</option>
            <option value=2>2</option>
          </select>
        </div>
        <div class="relative flex items-center">
          <i class="fa-solid fa-lock absolute pl-4 text-2xl"></i>
          <div class="w-full relative flex items-center">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Senha"
              class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12"
              v-model="password"
            />
            <i
              class="fa-solid fa-eye absolute text-2xl justify-self-end right-0 mr-4 cursor-pointer"
              @click="showPassword = !showPassword"
            ></i>
          </div>
        </div>
        <div class="relative flex items-center">
          <i class="fa-solid fa-lock absolute pl-4 text-2xl"></i>
          <div class="w-full relative flex items-center">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Confirmar Senha"
              class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12"
              v-model="afirmPassword"
            />
            <i
              class="fa-solid fa-eye absolute text-2xl justify-self-end right-0 mr-4 cursor-pointer"
              @click="showPassword = !showPassword"
            ></i>
          </div>
        </div>
        <div class="text-center" v-if="wrongPasswords">
          <p class="text-red-500 transition ease-in-out duration-150 animate-shake">
            As senhas não correspondem!
          </p>
        </div>
      </div>
      <button
        class="bg-cyan p-4 rounded-2xl text-xl text-white font-black mt-4"
        @click="registerUser()"
      >
        Registrar-se
      </button>
    </div>
  </div>
</template>
