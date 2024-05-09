<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const visualizar = () => {
    router.push({ name: 'form' })
}
</script>

<template>
        <button @click="visualizar()" class="BtnResposta">Visualizar</button>
</template>

<style scoped>
.BtnResposta {
  background-color: var(--ciano);
  border-radius: 15px;
  color: var(--branco);
  padding: 2.5% 25%;
  margin: 6% auto;
}
</style>
