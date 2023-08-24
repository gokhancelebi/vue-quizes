<script setup>
import {ref,watch} from 'vue'
import Container from './Container.vue'; 

const search_value = ref("")

const emit = defineEmits(['searchChange'])

watch(search_value,(newValue) => {
    emit('searchChange',newValue)
})

</script>
<template>
    <header>
        <Container class="flex justify-between border-b mb-10 p-2">
            <router-link to="/"><img alt="Vue logo" class="p-3" src="./../assets/logo.svg" width="50" height="50" /></router-link>
            <input type="text" v-model="search_value" class="border rounded p-2">
        </Container>
    </header>
</template>