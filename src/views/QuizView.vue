<script setup>

import {ref,computed} from 'vue'
import {useRoute} from 'vue-router'

import Container from '../components/Container.vue';
import Question from '../components/Question.vue';

import q from './../data/data.json'


const route = useRoute()
const quiz_id = parseInt(route.params.quiz_id)
const quiz = q.find(q_ => q_.id === parseInt(quiz_id))
const questions = quiz.questions
const questionCount = questions.length 

const correctAnswerCount = ref(0)
const currentQuestionIndex = ref(0)

 
const qurrentQuestion = computed(() => {
    return questions[currentQuestionIndex.value]
})

const answerSelected = (isCorrect) => {

    if(isCorrect === true){
        correctAnswerCount.value++
    }

    console.log(currentQuestionIndex.value + " " + questionCount)

    currentQuestionIndex.value++

}

</script>
<template>
    <Container>
        <Question v-if="currentQuestionIndex !== questionCount" @answerSelected="answerSelected" :question="qurrentQuestion"/>
        <div v-else class="text-center">
            <h1 class="text-3xl">
                Your Score : {{ correctAnswerCount }} / {{ questionCount }}
            </h1>
        </div>
    </Container>
</template>