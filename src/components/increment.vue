<template>
    <div>
      <h1 class="color-red">{{title}}</h1>
      <h2 >{{subtitle}}</h2>
       <h2>{{count}}</h2>
       <h3>{{list}}</h3>
      <button @click="increment">Count</button>
      <button @click="buttonClick">Call Me</button>
    </div>
  </template>
  
  <script setup>
  import {ref,defineProps,defineEmits} from 'vue'

  const emit = defineEmits(['childToParent','childtoparent2'])

  defineProps({
    title:{
      type:String,
      default:'Hello world'
    },
    subtitle:{
      type:String,
      default:''
    },
    list:{
      type:Array,
      default:['1','2']
    },
    anyProp:{

    }
  })
   let count = ref(0)
   const obj = {
    name : 'Ali',
    class: 10,
    bloodGroup:'A+'

   }
   function increment(){
    count.value = count.value + 1
    console.log(count.value)
   }

   function buttonClick(){
    emit("childtoparent2",obj)
   }
  </script>
  
  <style scoped>
  .color-red{
    color:red
  }
  </style>
  