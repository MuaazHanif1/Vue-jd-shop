<template>
    <section class="products mt-[60px] mb-[60px] mr-[40px] ml-[40px]">
         <h2 class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase underline margin-top-10">Featured Products</h2>
         <div id="product-list" class="product-list flex-center">
         <CardComponent v-for="value in productData" 
                    :productId="value.id"
                    :productImage="value.image"
                    :productTitle="value.title"
                    :productPrice="value.price"
                    @deleteProduct="productDelete"
                    @AddProduct="openAddProductPage"
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
    window.location.href = `add-new-product.html?id=${productId}`
}
</script>