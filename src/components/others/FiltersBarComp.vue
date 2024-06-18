<script setup>
    defineProps({
        titlle: {
        type: String,
        required: true
        }
    })
</script>   

<template>
  <div class="flex flex-col w-5/6 my-6">
    <div>
      <h1 class="text-2xl my-3 font-medium">{{ titlle }}</h1>
    </div>
    <div class="flex items-center">
      <p class="mr-5 font-medium">Filtrar por:</p>
      <select>
        <option value="">materia</option>
      </select>
      <select>
        <option value="">Professor</option>
      </select>
      <input type="date" />
      <select>
        <option value="">Horario</option>
      </select>
    </div>
  </div>
</template>

<style>
select,
input[type='date'] {
  border-radius: 3rem;
  margin: 0px 5px 0px 5px;
  padding: 1px 10px;
  font-size: 13px;
  height: 30px;
}
</style>
