<template>
    <h1>child2</h1>
    <!-- <h2>{{store.studentRecord}}</h2> -->
     <h2>{{store.user.name}}</h2>
</template>


<script setup>
import { useUserStore } from '@/store/user';
const store = useUserStore()
</script>