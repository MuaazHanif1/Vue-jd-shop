<template>
 <WelcomeComponent :isButtonNeed="true" heading="Welcome to my home" subTitle="fresh deals every day" buttonText="shop now"></WelcomeComponent>
 <ProductListComponent></ProductListComponent>
 <NewsLetter></NewsLetter>
</template>

<script setup>

import NewsLetter from '@/components/News-Letter.vue';
import ProductListComponent from '@/components/Product-List-Component.vue';
import WelcomeComponent from '@/components/Welcome-Component.vue';

 
</script>

<style>

</style>