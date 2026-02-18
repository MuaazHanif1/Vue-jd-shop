
<template>
    <h1>Child</h1>
    <!-- <h1>{{studentRecord}}</h1> -->
     <h2>{{store.studentRecord}}</h2>
    <Child2></Child2>
</template>


<script setup>
import { useUserStore } from '@/store/user';
const store = useUserStore()
defineProps(['studentRecord'])

import Child2 from './child2.vue';

</script>

