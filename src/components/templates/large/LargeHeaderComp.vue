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
        <div class="flex items-center justify-self-end">
          <!--search icon svg-->
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-7 relative left-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text" name="" id="" placeholder="Pesquisar Formularios" class="rounded-full w-80 indent-20 h-11 text-xs">
        </div>
        <div class="m-2 font-medium rounded-full bg-icewhite flex">
          <button class="py-3 w-32 rounded-full flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            Ligth
          </button>
          <button class="py-3 w-32 rounded-full bg-black text-white flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="white" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            Dark
          </button>
        </div>
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
