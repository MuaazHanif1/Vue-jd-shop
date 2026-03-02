<template>
    <section class="products mt-[60px] mb-[60px] mr-[40px] ml-[40px]">
         <h2>Featured Products</h2>
         <h1 class="text-3xl font-bold text-underline">
            Hello world!
          </h1>
         <div id="product-list" class="product-list flex-center">
         <CardComponent v-for="value in productData" 
                    :productId="value.id"
                    :productImage="value.image"
                    :productTitle="value.title"
                    :productPrice="value.price"
                />
        
         </div>
    </section>

</template>

<script setup>
import { ref,onMounted } from 'vue';
import CardComponent from './Card-Component.vue'; 
onMounted(()=>{
    dataFetch()
})

let productData = ref([])

const dataFetch = async()=>{
    let response = await fetch('https://fakestoreapi.com/products')  
    let data  = await response.json()
    productData.value = data
}
</script>