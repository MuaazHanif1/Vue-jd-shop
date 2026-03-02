<template>
    <h1>about</h1>
    <input type="text" v-model="text"/>
    <p :class="[textLength > 10 ? 'danger': 'green']">YOU TEXT :{{text}}</p>
    <p v-if="textLength > 10">text length equal to 10 or less then 10</p>
</template>

<script setup>
import { ref,watch,computed } from 'vue';
const text = ref('')
const textLength = computed(()=>{
    return text.value.length
})

watch(textLength,(newValue,oldValue)=>{
    console.log('i am in watcher')
    if(newValue > 10){
        console.log('Value is greater then 10')
    }
})
</script>

<style scoped>
.danger{
    color: red;
}

.green {
    color: green;
}
</style>