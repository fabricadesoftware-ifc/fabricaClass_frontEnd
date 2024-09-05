<script setup>
import { ArrowTopRight, CalendarRange, ClockTimeFiveOutline, Xml } from './icons.js';

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
            <p class="stars">{{ stars }}</p>
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
section {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 25px;
    padding: 5px;
    margin-bottom: 50px;
}

.color {
    width: 100%;
    height: 150px;
    padding: 1rem 1.5rem 1rem 1rem;
    color: white;
    border-radius: 25px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    font-size: 15pt;
}

.textInfo .title h3{
    color:black;
    opacity: 1;
}

.info {
    width: 100%;
    display: flex;
    margin-top: -1rem;
    justify-content: space-around;
    gap: 15px;
    font-weight: 500;
}

.info .stars{
    font-weight: 700;
}

.info>p {
    background-color: white;
    box-shadow: 0px 0px 5px 0px rgb(221, 221, 221);
    width: 35%;
    padding: 5px;
    text-align: center;
    font-size: 8pt;
    border-radius: 20px;
}

.text {
    display: grid;
    grid-template-columns: 4fr 1fr;
    width: 95%;
    margin: 5px auto;
}

.textInfo {
    opacity: 0.4;
}

.date {
    font-size: 10pt;
    display: flex;
    height: 30px;
    align-items: center;
}

.date>p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

button {
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

button>span {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
}

button>span>svg {
    width: 100%;
    height: 100%;
}
</style>