<template>
    <section class="products mt-[60px] mb-[60px] mr-[40px] ml-[40px]">
        <hr class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text">
         <h2 class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase underline mt-60px">Featured Products</h2>
            <p class="text-center text-gray-500 mt-20px mb-20px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</p>
         <div id="product-list" class="product-list flex-center">
         <CardComponent v-for="value in productData" 
                    :productId="value.id"
                    :productImage="value.image"
                    :productTitle="value.title"
                    :productPrice="value.price"
                    @deleteProduct="productDelete"
<<<<<<< HEAD
                    @AddProduct="openAddProductPage"
                    @Buynow="Buynow"
=======
                    @openAddProductPage="openAddProductPage"
>>>>>>> 73ab124b6400557856f626f61883b40891bc9a29
                />
        
         </div>
    </section>

</template>
<style scoped>
.mt-60px{
    margin-top: 20px;
}
</style>
<script setup>
import { useMyStore } from '@/stores/MyStore.js'
import { ref,onMounted } from 'vue';
import CardComponent from './Card-Component.vue'; 
onMounted(()=>{
    dataFetch()
})
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)


const store = useMyStore()
let productData = ref([])
const productDelete = async (product_id)=>{
      let response = await fetch(`https://fakestoreapi.com/products/${product_id}`,{
        method: "Delete"
    })
    let data  = await response.json()
    console.log(data)
    if(data){
        productData.value = productData.value.filter(current => current.id !== product_id)
    }
     
}
const dataFetch = async()=>{
    let response = await fetch('https://fakestoreapi.com/products')  
    let data  = await response.json()
    productData.value = data
}
const openAddProductPage = (productId)=>{
    alert(productId, 'id from parent')
    window.location.href = `/product/${productId}`
}
const pushDataToStore = (product) => {
  store.addItem(product)   // ye push karta hai store ke array me
}
</script>