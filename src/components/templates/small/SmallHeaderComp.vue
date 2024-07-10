<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>
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
  <nav class="shadow-none bg-gray pl-16">
    <p>Filtrar por:</p>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-gray px-2 py-1.5 text-sm font-family text-gray-900 ring-black ring-inset hover:bg-white"
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
          class="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Desenvolvimento Web</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Programação</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Projetos de Software</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Banco de dados</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>

    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-gray px-2 py-1.5 text-sm font-family text-gray-900 ring-black ring-inset hover:bg-white"
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
          class="absolute right-0 z-10 w-56 origin-top-right rounded-xl bg-gray shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Fábio Moura</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Marco Rojas</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Eduardo Silva</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Marco André</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>

    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-gray px-2 py-1.5 text-sm font-family text-gray-900 ring-black ring-inset hover:bg-white"
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
          class="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Recente</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Distante</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
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
button {
  border: 1px solid black;
  border-radius: 30px;
  padding: 5px;
  margin: 4px;
}
</style>
