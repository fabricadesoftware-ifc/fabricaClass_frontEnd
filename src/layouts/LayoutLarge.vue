<script setup>
import LargeHeaderComp from '../components/templates/large/LargeHeaderComp.vue';
import LargeAsideComp from '../components/templates/large/LargeAsideComp.vue'
import Cards from '../components/Cards/CardsComp.vue';
// import { useRoute } from 'vue-router';

</script>

<template>
    
<div id="layout-large" >
    <aside>
        <LargeAsideComp />
    </aside>
    <span>
    <header>
        <LargeHeaderComp/>
    </header>
    <main>
        <Cards/>
    </main>
</span>
    <RouterView/>
</div>
</template>

<style scoped>
#layout-large {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 3fr;
    height: 100vh;
}
</style>