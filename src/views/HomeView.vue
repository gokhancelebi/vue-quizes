<script setup>
import {inject} from 'vue'

import gsap from "gsap"

import QuizCard from './../components/QuizCard.vue'
import Container from '../components/Container.vue';

const quizes = inject('quizes')

const beforeEnter = (el) => {
    // Cart enter from
    el.style.opacity = 0 
    el.style.transform = "translateY(-60px)"
}

const enter = (el) => {
     // Cart enter to
     gsap.to(el,{
        y:0,
        opacity:1,
        duration:0.4,
        delay: el.dataset.index * 0.3
     })
}

const afterEnter = () => { 
    
}
 
</script>
<template>
    <Container class="grid grid-cols-3 gap-3">
        <transition-group
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
         appear>
            <QuizCard  
            v-for="(quiz,index) in quizes" 
            :key="quiz.id" 
            :quiz="quiz"
            :data-index="index" />
        </transition-group> 
    </Container>
</template>
<style scoped>
.card-enter-from{
    opacity: 0;
    transform: translateY(-50px);
}
.card-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.card-enter-active{
    transition: all 0.4s ease;
}
</style>