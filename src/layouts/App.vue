<script setup> 
import {ref,provide} from 'vue'

import Header from './../components/Header.vue'

import q from './../data/data.json'

const quizes = ref(q)
const search = ref("1")

provide("quizes",quizes)

const searchChange = (newValue) => {
  search.value = newValue
  quizes.value = q.filter(q_ => q_.name.toLowerCase().includes(search.value.toLowerCase()))
}

</script>
<template>
  <Header @searchChange="searchChange" />
  <main>
    <RouterView />
  </main>
</template>