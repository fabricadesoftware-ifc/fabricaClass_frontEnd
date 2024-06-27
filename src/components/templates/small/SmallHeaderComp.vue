<script setup>
</script>
<template>
  <nav class="shadow-lg h-40 flex justify-center bg-gray">
    <div class="flex w-3/5 justify-between items-center">
      <div class="info-perfil"> 
          <img class="img-perfil" src="/src/assets/imagem-perfil.jpg"/>
          <p class="text-lg font-normal">Jhonny Camphell</p>
          <p class="text-sm font-light">Estudante</p>
      </div>
      <div class="icons">
          <i class="fa-solid fa-search search"></i>
          <i class="fa-solid fa-gear gear"></i>
      </div>
    </div>
  </nav>
</template>

<style>
.search{
  margin:20px;
}
.img-perfil{
  margin-top: 5%;
  width: 80px;
  height: 70px;
  border-radius: 100%;
}
</style>
