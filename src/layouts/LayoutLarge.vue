<script setup>
import LargeHeaderComp from '../components/templates/large/LargeHeaderComp.vue';
import LargeAsideComp from '../components/templates/large/LargeAsideComp.vue'
import Cards from '../components/Cards/Cards.vue';
import { useRoute } from 'vue-router';

</script>

<template>
    
<div id="layout-large" >
    <header>
        <LargeHeaderComp/>
    </header>
    <aside>
        <LargeAsideComp />
    </aside>
    <main>
        <Cards/>
    </main>
    <RouterView/>
</div>
</template>