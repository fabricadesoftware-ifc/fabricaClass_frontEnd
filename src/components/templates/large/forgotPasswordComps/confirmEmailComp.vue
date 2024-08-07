<script setup>
</script>
<template>
  <head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  </head>
  <div class="bg-white w-screen h-screen flex justify-center items-center">
    <div class="flex flex-col bg-icewhite w-1/2 h-2/4 justify-between items-center p-14 rounded-3xl gap-3">
      <div class="flex flex-col items-center w-3/4">
        <h1 class="text-3xl font-semibold">Esqueceu a senha</h1>
        <p class="w-3/4 text-center">Selecione quais detalhes de contato devemos usar para refinir sua senha</p>
      </div>
      <div class="flex rounded-xl p-3 w-3/4 border-black border-2 border-solid">
        <div class="w-14 h-14 bg-black rounded-full flex items-center justify-center"><i class="bx bxl-gmail text-icewhite"></i></div>
        <div class="flex flex-col justify-center text-sm pl-3">
          <span class="text-black">Enviar via email</span>
          <span class="font-semibold">vinyescolas@gmail.com</span>
        </div>
      </div>
      <button class="bg-black w-5/6 h-14 rounded-full text-white font-semibold">Enviar código</button>
    </div>
  </div>
</template>
<style scoped>
</style>