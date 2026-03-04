<template>
  <div class="p-[30px]">

    <div 
      v-for="item in store.myArray" 
      :key="item.id"
      class="product-card shadow-xl/20 rounded-lg p-4 mb-6"
    >
      <img :src="item.image" :alt="item.title" class="w-[200px]">
      <h3 class="font-bold mt-2">{{ item.title }}</h3>
      <p>Rs: {{ item.price }}</p>
    </div>

  </div>
</template>

<script setup>
import { useMyStore } from '@/store/MyStore'
const store = useMyStore()
</script>