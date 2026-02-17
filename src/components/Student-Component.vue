<template>
    <h1>Student-Result</h1>
    <ui>
      <li v-for="value in studentRecord">
        <h1 v-if="value.number < 40" class="red">{{value.name}} : {{value.number}} : <span >Fail!</span> </h1>
        <h1 v-else-if="value.number >= 40 && value.number < 70">{{value.name}} : {{value.number}} : <span >Pass!</span> </h1>
        <h1 v-else-if="value.number >= 70 && value.number < 90">{{value.name}} : {{value.number}} : <span >Good!</span> </h1>
        <h1 v-else-if="value.number >= 90" class="green">{{value.name}} : {{value.number}} : <span >Excellent!</span> </h1>
     </li>
       
    </ui>
</template>

<script setup>
defineProps(['studentRecord'])
</script>

<style>
 .red{
    color: red;
 }
 .green{
    color: green;
 }
</style>