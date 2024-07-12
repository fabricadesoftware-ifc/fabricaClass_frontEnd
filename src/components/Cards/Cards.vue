<script setup>
import {ref} from 'vue';
import Item from './Item.vue';
import { itens } from './itens.js'

const teste = itens
</script>

<template>
    <main>
        <div v-for="(item, index) in teste" :key="index">
        <Item :teacher="item.teacher" :stars="item.stars" :class="item.class" :date="item.date" :hour="item.hour" />
    </div>
    </main>
</template>

<style scoped>
main{
    width: 100%;
    height: 100%;
    background-color: var(--FAF9F9);
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

main > div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}


@media screen and (max-width: 768px){
    main{
        grid-template-columns: 1fr;
    }
    
}
</style>