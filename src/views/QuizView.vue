<script setup>

import {ref,computed,onUpdated} from 'vue'
import {useRoute} from 'vue-router'

import Container from '../components/Container.vue';
import Question from '../components/Question.vue';
import ProgressBar from '../components/ProgressBar.vue'

import q from './../data/data.json'


const route = useRoute()
const quiz_id = parseInt(route.params.quiz_id)
const quiz = q.find(q_ => q_.id === parseInt(quiz_id))
const questions = quiz.questions
const questionCount = ref(questions.length)
const percentage = ref(0)

const correctAnswerCount = ref(0)
const currentQuestionIndex = ref(0)

 
const qurrentQuestion = computed(() => {
    return questions[currentQuestionIndex.value]
})

const answerSelected = (isCorrect) => {

    if(isCorrect === true){
        correctAnswerCount.value++
    }
 
    currentQuestionIndex.value++


    percentage.value = (currentQuestionIndex.value)  / questionCount.value

}

</script>
<template>
    <Container>
        <ProgressBar :percentage="percentage" />
        <Question v-if="currentQuestionIndex !== questionCount" @answerSelected="answerSelected" :question="qurrentQuestion"/>
        <div v-else class="text-center flex flex-col justify-center items-center gap-10">
            <h1 class="text-3xl">
                Your Score : {{ correctAnswerCount }} / {{ questionCount }}
            </h1>
            <router-link to="/" class="p-3 text-white font-bold box-border border rounded bg-green-500 hover:bg-green-600 w-content flex-auto">Return to Quizes</router-link>
        </div>
    </Container>
</template>