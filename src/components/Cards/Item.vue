<script setup>
import { ArrowTopRight, CalendarRange, ClockTimeFiveOutline, Xml } from '../Cards/icons.js';

defineProps({
  teacher: String,
  stars: String,
  class: String,
  date: String,
  hour: String,
})

</script>

<template>
    <section>
        <div class="color">
            <Xml />
            <p>...</p>
        </div>
        <div class="info">
                <p>Professor <strong>{{ teacher }}</strong></p>
                <p>{{ stars }}</p>
        </div>

        <div class="text">
            <div class="textInfo">  
            <div class="title">
            <h3>{{ class }}</h3>
            </div>
            <div class="date">
                <p>
                    <CalendarRange /> 
                    {{ date }}
                    <ClockTimeFiveOutline />
                {{ hour }}
                </p>
            </div>
            </div>

            <div class="button">
                <button>
                    <ArrowTopRight />
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
section{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--branco);
    border-radius: 15px;
    padding: 5px;
}

.color{
    width: 100%;
    height: 130px;
    padding: 1rem 1.5rem 1rem 1rem;
    color: var(--branco);
    border-radius: 20px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    font-size: 15pt;
}

.info{
    width: 100%;
    display: flex;
    margin-top: -1rem;
    justify-content: space-around;
    gap: 15px;
}

.info > p {
    background-color: var(--branco);
    width: 30%;    
    padding: 5px;
    text-align: center;
    font-size: 8pt;
    border-radius: 20px;
}

.text{
    display: grid;
    grid-template-columns: 4fr 1fr;
    width: 95%;
    margin: 5px auto;
}

.textInfo{
    opacity: 0.7;
}

.date{
    font-size: 10pt;
    display: flex;
    height: 30px;
    align-items: center;
}

.date > p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

button{
    background-color: blue;
    border: 0;
    max-width: 100%;
    max-height: 100%;
    color: var(--branco);
    border-radius: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: pointer;   
}

button > span{
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
}

button > span > svg {
    width: 100%;
    height: 100%;
}


</style>