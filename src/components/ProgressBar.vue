<script setup>
const {percentage} = defineProps(['percentage'])
</script>
<template>
       <div class="w-full border border-orange-400 rounded overflow-hidden mb-2">
            <div class="bg-orange-400 h-4"  :style="{ 'width' : (percentage * 100) + '%' }">
                
            </div>
        </div>
</template>