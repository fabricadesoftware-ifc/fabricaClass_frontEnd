<script setup></script>
<template>
  <header class="h-40 flex justify-center bg-gray">
    <div class="flex items-center">
      <div class="image">
        <img class="img-perfil" src="/src/assets/imagem-perfil.jpg" />
      </div>
      <div class="name">
        <p class="text-lg font-normal">Jhonny Camphell</p>
        <p class="text-sm font-light">Estudante</p>
      </div>
      <div class="icons">
        <i class="fa-solid fa-search search"></i>
        <i class="fa-solid fa-gear gear"></i>
      </div>
    </div>
  </header>
  <nav class="text-sm shadow-none bg-gray">
    <p>Filtrar por:</p>
    <button>Matéria <i class="fa-solid fa-arrow-down"></i></button>
    <button>Professor <i class="fa-solid fa-arrow-down"></i></button>
    <button>Data <i class="fa-solid fa-calendar"></i></button>
    <button>Horário <i class="fa-solid fa-arrow-down"></i></button>
  </nav>
</template>

<style>
.search {
  margin: 20px;
}
.img-perfil {
  margin-top: 5%;
  width: 80px;
  height: 70px;
  border-radius: 100%;
}
button{
  border: 1px solid black;
  border-radius:30px;
  padding:5px;
  margin: 4px;
}
</style>
