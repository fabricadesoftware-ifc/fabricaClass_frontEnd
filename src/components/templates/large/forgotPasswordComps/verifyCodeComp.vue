<script setup>

import { ref, reactive } from 'vue'

const digits = reactive([
  { id: 1, digit: '' },
  { id: 2, digit: '' },
  { id: 3, digit: '' },
  { id: 4, digit: '' }
])
const itemRefs = ref([])

// Mover foco para o próximo input
function moveToNextField(evt, index) {
  var next = index + 1
  var before = index - 1
  if (evt.key != 'Backspace' && index < 3) {
    itemRefs.value[next].focus()
  }else if (index == 3 && evt.key != 'Backspace') {
    itemRefs.value[3].blur()
  } else {
    itemRefs.value[before].focus()
  }
}

// Separar Cntrl + V entre os inputs
function handleCrtlV(e) {
  const value = e.clipboardData.getData('text')
  for (let input of digits) {
    input.digit = value[input.id - 1]
  }
  itemRefs.value[3].focus()
}

</script>
<template>
  <head>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  </head>
  <div class="bg-white w-screen h-screen flex justify-center items-center">
    <div
      class="flex flex-col bg-icewhite w-1/2 justify-between items-center p-14 rounded-3xl gap-5"
    >
      <div class="flex flex-col items-center w-3/4">
        <h1 class="text-3xl font-semibold text-center">Digite o código de verificação</h1>
        <p class="w-3/4 text-center">
          Foi enviado o código de verificação para vinyescolas@gmail.com
        </p>
      </div>
      <div class="flex rounded-xl p-3 w-2/4 gap-2">
        <input
          v-for="(digit, index) in digits"
          @paste="handleCrtlV"
          :key="digit.id"
          type="text"
          class="digit-code"
          maxlength="1"
          v-model="digit.digit"
          ref="itemRefs"
          @keyup="(event) => moveToNextField(event, index)"
        />
      </div>
      <span class="text-gray">Reenviar código 25s</span>
      <button class="bg-black w-5/6 h-14 rounded-full text-white font-semibold">Enviar</button>
    </div>
  </div>
</template>
<style scoped>
.digit-code {
  width: 25%;
  height: 75px;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 15px;
  font-size: 3rem;
  text-align: center;
}
</style>
