<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>
<template>
  <header class="h-24 flex flex-wrap justify-center bg-gray">
    <div class="flex flex-row items-center w-full mt-4">
      <div class="image basis-1/4 ml-14">
        <img class="img-perfil" src="/src/assets/imagem-perfil.jpg" />
      </div>
      <div class="name basis-1/2">
        <p class="text-lg font-medium">Jhonny Camphell</p>
        <p class="text-sm font-light">Estudante</p>
      </div>
      <div class="icons basis-1/4">
        <i class="fa-solid fa-search search"></i>
        <i class="fa-solid fa-gear gear"></i>
      </div>
    </div>
    <p class="text-lg font-semibold">Formulários Recentes</p>
    <nav class="flex items-center justify-center shadow-none bg-gray h-24 w-full">
      <p class="text-md font-medium">Filtrar por:</p>
      <Menu as="div" class="relative inline-block bg-icewhite rounded-full px-2">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-icewhite px-2 py-1.5 text-sm font-medium text-gray-900 ring-black ring-inset hover:bg-gray"
          >
            Matéria
            <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-icewhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Desenvolvimento Web</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Programação</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Projetos de Software</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Banco de dados</a
                >
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>

      <Menu as="div" class="relative inline-block text-left bg-icewhite rounded-full">
        <div class="mr-2">
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-icewhite px-2 py-1.5 text-sm font-medium text-gray-900 ring-black ring-inset hover:bg-gray"
          >
            Professor
            <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 w-56 origin-top-right rounded-xl bg-icewhite shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Fábio Moura</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Marco Rojas</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Eduardo Silva</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Marco André</a
                >
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>

      <Menu as="div" class="relative inline-block text-left bg-icewhite rounded-full">
        <div class="mr-2">
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-icewhite px-2 py-1.5 text-sm font-medium text-gray-900 ring-black ring-inset hover:bg-gray"
          >
            Data
            <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-icewhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Recente</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }" class="hover:bg-strong">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    'hover:text-icewhite'
                  ]"
                  >Distante</a
                >
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </nav>
  </header>
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
button {
  border: 1px solid black;
  border-radius: 30px;
  padding: 5px;
  margin: 4px;
}
</style>
