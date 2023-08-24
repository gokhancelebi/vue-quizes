<script setup>

const {quiz} = defineProps(['quiz'])

</script>
<template>
    <router-link :to="{name:'quiz',params : {quiz_id : quiz.id}}" class="flex flex-col gap-2 rounded border p-2">
        <img :src="quiz.img" class="w-full">
        <p>
            {{ quiz.name }}
        </p>
        <p>
            02/02/2002
        </p>
    </router-link>
</template>