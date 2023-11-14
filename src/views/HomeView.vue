<script setup>
import { ref } from 'vue'
import FileDocumentOutline from 'vue-material-design-icons/FileDocumentOutline.vue'

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
  <div class="cards">
    <div v-for="(card, i) in listaCards" :key="i" class="card-aula">
      <div class="info">
        <div class="texto" style="color: var(--ciano); margin-top: 3%;">
          {{ card.data }}
        </div>
        <div class="texto aula">{{ card.aula }}</div>
        <div class="texto" style="margin-right: 50% ;"> {{ card.horarioInicio }} - {{ card.horarioFim }}</div>
        <div class="logo">
        <file-document-outline class="icone"/>
        </div>
        <button class="resposta">Responder</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cards {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: auto;
  width: 85vw;
  height: 70vh;
}
.card-aula {
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  margin: 1rem;
  border-radius: 15px;
  border-top: var(--ciano) 19px solid;
  flex-direction: column;
  padding: 0 10px;
  box-shadow: 0px 4px 34px 2px rgba(0, 0, 0, 0.25);
}
.resposta {
  background-color: var(--ciano);
  border-radius: 15px;
  color: var(--branco);
  padding: 2.5% 25%;
  margin: 6% auto;
}
.info {
  display: flex;
  flex-wrap: wrap;
}
.texto {
  font-size: 0.8rem;
}
.aula {
  font-size: 1.2rem;
  font-weight: bold;
}
.logo{
display: flex;
justify-content: center;
margin: auto;
}

</style>
