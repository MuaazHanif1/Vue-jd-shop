<template>
<HeaderComponent/>
<increment title="MY Website 1" subtitle="this is my website" :list="[]" @childToParent="Parent" @childtoparent2="Parent">
</increment>
<h1>{{childValues?.name}}</h1>
<br>

</template>
<script setup>
import {ref} from 'vue'
import increment from './components/increment.vue'
import HeaderComponent from './components/Header-Component.vue';
const listOfStudent = ['Hamza',"Talha"]
let childValues = ref({})
childValues.value = [];

function Parent(data){
  //childValues.value = data
  consoles.log(data)
}
</script>

<style>
/* .color-blue{
  color:blue
} */
</style>