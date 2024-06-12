<script setup>
import LargeHeaderComp from '../components/templates/large/LargeHeaderComp.vue';
import { useRoute } from 'vue-router';

</script>

<template>
    
<div id="layout-large" >
    <header>
        <LargeHeaderComp/>
    </header>
    <RouterView/>
</div>


</template>