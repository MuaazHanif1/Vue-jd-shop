<template>

<div class="product-card p-[30px] box-shadow">
    <img :src="productImage" :alt="productTitle">
      <h3>{{productTitle}}</h3>
      <p>Rs: {{productPrice}}</p>
     <button >Buy now</button>
    <button @click="deletePro">Delete</button>
    <button @click="newAddPage">Edit</button>   
</div>
</template>

<script setup>
let props =  defineProps({
    productId: {
        type: [String, Number]
    },
    productImage: {
        type: String
    },
    productTitle: {
        type: String
    },
    productPrice: {
       type: [String, Number]
    }
})

let emit = defineEmits(['deleteProduct','openAddProductPage'])

const deletePro = ()=>{
        emit('deleteProduct',props.productId)
}
const newAddPage = ()=>{
    emit('openAddProductPage',props.productId)
}   
</script>