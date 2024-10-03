<script setup>
// import {ref} from 'vue';
import ItemCard from './ItemCard.vue';
import filtersBarComp from '../others/FiltersBarComp.vue'
import { itens } from './itens.js'

const teste = itens
</script>

<template>
    <main>
        <div class="w-11/12">
            <filtersBarComp />
        </div>
        <div class="w-11/12">
            <div v-for="(item, index) in teste" :key="index" class="card">
                <ItemCard :teacher="item.teacher" :stars="item.stars" :class="item.class" :date="item.date"
                    :hour="item.hour" />
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    margin-right: 0;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

main>div {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.card{
    width: 380px;
}

@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr;
    }
}
</style>