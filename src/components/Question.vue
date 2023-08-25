<script setup>
const emit = defineEmits(['answerSelected'])
const {question} = defineProps(['question'])

const selectedOption = (isCorrect) => {
    emit('answerSelected',isCorrect)
}

</script>
<template>
    <div class="border rounded p-2 pb-4">
        <h1 class="p-2 ">
           <span class="font-bold">Question: </span> {{ question.text }} 
        </h1>
        <div class="flex flex-col gap-5"> 
            <div v-for="option in question.options" :key="option.id" class="cursor-pointer bg-orange-200 hover:bg-orange-400 flex" @click="selectedOption(option.isCorrect)">
                <p class="w-6 bg-orange-300 text-center">{{ option.label }}</p>
                <span class="ml-3">{{ option.text }}</span>
            </div>
        </div>
    </div>
</template>