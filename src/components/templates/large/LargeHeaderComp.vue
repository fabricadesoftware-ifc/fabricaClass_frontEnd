<script setup>
import filterBarComp from '@/components/others/FiltersBarComp.vue'
</script>

<template>
  <nav class="w-auto flex flex-col items-center h-auto justify-center">
    <div class="flex justify-between w-5/6 mt-12">
      <div class="flex items-center">
        <img src="" alt="" class="" id="perfilAvatar">
        <div class="">
          <p class="text-xl indent-1 font-medium">Vinicius Gabryel</p>
          <p class="text-xs indent-1">Estudante</p>
        </div>
      </div>
      <div class="flex items-center">
        <input type="text" name="" id="" placeholder="Pesquisar Formularios" class="rounded-full w-80 indent-10 h-11 text-xs">
      </div>
    </div>
    <filterBarComp titlle="Formularios Recentes"/>
  </nav>
</template>

<style scoped>
  nav{
    background-color: #efefef;
  }
  #perfilAvatar{
    border-radius: 50%;
    width: 75px;
    height: 75px;
    background-color: white;
  }
</style>
