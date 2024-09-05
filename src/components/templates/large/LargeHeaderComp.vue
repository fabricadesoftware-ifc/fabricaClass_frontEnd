<script setup>
import { ref } from 'vue'
const isDark = ref(false)
const isLight = ref(true)
function switchTeme() {
  isDark.value = !isDark.value
  isLight.value = -!isLight.value
}
</script>

<template>
  <nav class="w-auto flex flex-col items-center h-48 z-0 justify-center bg-white">
    <div class="flex justify-between w-11/12 mt-12">
      <div class="flex items-center">
        <img src="" alt="" class="" id="perfilAvatar" />
        <div class="disable">
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
            class="w-7 relative left-16"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="Pesquisar Formularios"
            class="rounded-full w-80 indent-20 h-12 text-xs"
          />
        </div>

        <div class="m-3 font-medium rounded-full flex w-56 p-0.5 cursor-pointer" @click="switchTeme()" :class="{ bgButtonLight: isDark, bgButtonDark: isLight}" >
            <span class="absolute z-10 h-12 ml-5 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              Light
            </span>
            <span
              class="relative bg-black w-28 h-12 rounded-full z-0"
              id=""
              :class="{ activeDark: isDark, activeLight: isLight }"
            >
              <div v-if="isLight"></div>
              <div v-else class="activeDark"></div>
            </span>
            <span class="absolute z-10 ml-32 h-12 text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            Dark
            </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#perfilAvatar {
  border-radius: 50%;
  width: 75px;
  height: 75px;
  background-color: white;
}
.activeDark {
  background-color: black;
  left: 108px;
  transition: 0.2s linear;
  color: white;
}
.bgButtonLight{
  background-color: white;
  transition: 0.2s linear;
}
.bgButtonDark{
  background-color: black;
  transition: 0.2s linear;
}
.activeLight {
  background-color: white;
  left: 0;
  transition: 0.2s linear;
}
@media (max-width: 1005px) {
  .disable{
    display: none;
  }
}
</style>
