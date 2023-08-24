<script setup>

import {ref,computed} from 'vue'
import {useRoute} from 'vue-router'
import Container from '../components/Container.vue';

import q from './../data/data.json'


const route = useRoute()
const quiz_id = parseInt(route.params.quiz_id)
const quiz = q.find(q_ => q_.id === parseInt(quiz_id))
const questions = quiz.questions

const correctAnswerCount = ref(0)
const currentQuestionIndex = ref(0)

 
const qurrentQuestion = computed(() => {
    return questions[currentQuestionIndex.value]
})

</script>
<template>
    <Container>
        {{ qurrentQuestion.text }}
    </Container>
</template>