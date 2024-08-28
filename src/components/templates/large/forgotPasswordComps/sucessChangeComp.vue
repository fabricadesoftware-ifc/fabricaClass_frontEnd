<script setup>
import { checkedIcon } from '../../../icons';
</script>
<template>
  <div class="bg-white w-screen h-screen flex justify-center items-center">
    <div class="flex flex-col bg-icewhite w-1/2 h-3/5 justify-between items-center p-14 rounded-3xl gap-3">
        <div class="checked-circle">
            <checkedIcon />
        </div>
        <div><p class="tittle text-center">Senha atualizada com sucesso!</p></div>
      <button class="bg-black w-5/6 h-14 rounded-full text-white font-semibold">Prosseguir</button>
    </div>
  </div>
</template>
<style scoped>
.tittle{
    font-size: 32px;
    font-weight: 300;
}
.checked-circle{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    background-color: #A8D498;
    border-radius: 100%;
}
</style>