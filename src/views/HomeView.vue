<script setup>
import {inject} from 'vue'

import QuizCard from './../components/QuizCard.vue'
import Container from '../components/Container.vue';

const quizes = inject('quizes')

</script>
<template>
    <Container class="grid grid-cols-3 gap-3">
        <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </Container>
</template>