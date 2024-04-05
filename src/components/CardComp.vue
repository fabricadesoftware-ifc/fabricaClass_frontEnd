<script setup>
import { ref } from 'vue'
import FileDocumentOutline from 'vue-material-design-icons/FileDocumentOutline.vue'
import { useRouter } from 'vue-router'


const listaCards = ref([
  {
    data: '10/10/2021',
    aula: 'Aula 1',
    horarioInicio: '08:00',
    horarioFim: '10:00'
  },
  {
    data: '10/10/2021',
    aula: 'Aula 2',
    horarioInicio: '10:00',
    horarioFim: '12:00'
  },
  {
    data: '10/10/2021',
    aula: 'Aula 3',
    horarioInicio: '14:00',
    horarioFim: '16:00'
  },
  {
    data: '10/10/2021',
    aula: 'Aula 4',
    horarioInicio: '16:00',
    horarioFim: '18:00'
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
    },
    {
      data: '6 de novembro de 2023',
      aula: 'Aula X, if else',
      horarioInicio: '9:45',
      horarioFim: '11:15'
    }
])

const router = useRouter()
const visualizar = () => {
  router.push({ name: 'form' })
}

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
        <button @click="visualizar()" class="resposta">Visualizar</button>
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
  flex-direction: column;
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

.icone{
  color: var(--ciano);
  font-size: 2rem;
  margin-top: 10%;
}

.card-aula:hover {
  transform: scale(1.03);
  transition: 0.5s;
  cursor: pointer;
}
</style>