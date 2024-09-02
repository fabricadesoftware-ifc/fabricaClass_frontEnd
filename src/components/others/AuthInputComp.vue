<script setup>
import { defineProps, defineModel } from 'vue'

defineProps({
  inputClass: {
    type: String,
    default: 'inputEmail'
  },
  typeinput: {
    type: String,
    default: 'email'
  },
  maxlength: {
    type: Number,
    default: 255
  }
})

const inputValue = defineModel()
</script>

<template>
  <div class="inputBase mb-9" :class="inputClass">
    <input
      :type="typeinput"
      class="w-full h-full rounded-xl px-5 pr-14 text-md"
      :maxlength="maxlength"
      v-model="inputValue"
    />
  </div>
</template>

<style scoped>
.inputEmail::before {
  content: 'email';
  width: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 15px;
  display: block;
  position: absolute;
  background-color: white;
  transform: translate(15px, -10px);
}
.inputPassword::before {
  content: 'senha';
  width: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 15px;
  display: block;
  position: absolute;
  background-color: white;
  transform: translate(15px, -10px);
}
.inputConfirmPassword::before {
  content: 'Confirme a senha';
  width: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 15px;
  display: block;
  position: absolute;
  background-color: white;
  transform: translate(15px, -10px);
}
.inputMatricula::before {
  content: 'matricula';
  width: 90px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 15px;
  display: block;
  position: absolute;
  background-color: white;
  transform: translate(15px, -10px);
}
.inputBase{
  border: 1px solid black;
  height: 65px;
  border-radius: 0.75rem;
  z-index: 2;
}
input[type="password"]::-ms-reveal {
    display: none;
}
.inputBase::after {
  content: '';
  width: 100%;
  height: 65px;
  display: block;
  position: relative;
  border: 1px solid black;
  border-radius: 0.75rem;
  z-index: -1;
  transform: translate(6px, -60px);
}
</style>
