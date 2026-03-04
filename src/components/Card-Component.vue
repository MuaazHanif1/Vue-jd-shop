<template>

<div class="product-card p-[30px] shadow-xl/20 rounded-lg">
    <img :src="productImage" :alt="productTitle">
      <h3 class="font-bold">{{productTitle}}</h3>
      <p>Rs: {{productPrice}}</p>
     <button @click="buyProduct">Buy now</button>
    <button class="delete" @click="deletePro">Delete</button>
    <button class="edit" @click="newAddPage">Edit</button>   
</div>
</template>

<script setup>
let props = defineProps({
    productId: [String, Number],
    productImage: String,
    productTitle: String,
    productPrice: [String, Number]
})

let emit = defineEmits(['deleteProduct','openAddProductPage','Buynow'])

const deletePro = () => {
    emit('deleteProduct', props.productId)
}

const newAddPage = () => {
    emit('openAddProductPage', props.productId)
}

const buyProduct = () => {
    emit('Buynow', {
        id: props.productId,
        image: props.productImage,
        title: props.productTitle,   // ✅ FIXED
        price: props.productPrice    // ✅ FIXED
    })
}
</script>