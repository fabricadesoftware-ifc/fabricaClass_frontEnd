<script setup>
import { ref } from 'vue'

const listaCards =
  ref([
    {
      data: '6 de novembro de 2023',
      aula: 'Aula X, if else',
      horarioInicio: '9:45',
      horarioFim: '11:15'
    },
    {
      data: '6 de novembro de 2023',
      aula: 'Aula X, if else',
      horarioInicio: '9:45',
      horarioFim: '11:15'
    },
    {
      data: '6 de novembro de 2023',
      aula: 'Aula X, if else',
      horarioInicio: '9:45',
      horarioFim: '11:15'
    }
  ])
</script>
<template>
  <div v-for="(card, i) in listaCards" :key="i" class="cards">
      <div class="card-aula">
        <div class="info">
          <div class="texto" style="color: var(--ciano)">
            {{ card.data }}
          </div>
          <div class="texto aula">{{ card.aula }}</div>
          <div class="texto"> {{ card.horarioInicio }} - {{ card.horarioFim }}</div>
          <div class="logo"></div>
          <button>Responder</button>
        </div>
        </div>
      </div>
</template>
<style scoped>
.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 960px;
  height: 684px;
}
.card-aula {
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  margin: 20px;
  border-radius: 15px;
  border-top: var(--ciano) 19px solid;
  flex-direction: column;
  padding: 0 10px;
  box-shadow: 0px 4px 34px 2px rgba(0, 0, 0, 0.25);
}
button {
  background-color: var(--ciano);
  border-radius: 15px;
  color: var(--branco);
  padding: 5px 0;
}
.info {
  display: flex;
  flex-wrap: wrap;
}
.texto {
  font-size: 12px;
}
.aula {
  font-size: 18px;
  font-weight: bold;
  margin: 3px 0;
}
</style>
