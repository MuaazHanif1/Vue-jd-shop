<template>
<div class="flex" >  
    <div class="border-2 flex-col  border-gray-300 rounded-lg p-8 w-88 shadow-lg text-center @media (max-width:451px) w-58">
      <Lodding v-if="isPageLoading" class="text-center bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase underline mt-60px">Lodding...</Lodding>
      <h2 class="text-2xl font-bold text" >{{ productId ? 'Edit Product' : 'Add new Product' }}</h2>
        <!--label-->
        <label>Enter Product Title </label>
        <!--input-->
        <input class="border-1 border-black-22" type="text" placeholder="e.g: Men shoes" required v-model="title">
        <!--label-->
        <label>Enter Product disprection </label>
        <!--input-->
        <input class="border-1 border-black-22" type="text" placeholder="e.g: Men shoes for runing" required  v-model="description">
        <!--label-->
        <label>Enter Product price </label>
        <!--input-->
        <input class="border-1 border-black-22" type="number" placeholder="e.g: 99.9 $" required v-model="price">
        <!--label-->
        <label>Enter Product image url </label>
        <!--input-->
        <input class="border-1 border-black-22" type="text" placeholder="Product image url" required v-model="img">

       <button class="button" type="button" @click="submit">{{productId ? 'Update Product' : 'Add Product'}}</button>
    </div>
</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

const title = ref('')
const description = ref('')
const price = ref('')
const img = ref('')
const productId = route.params.id

const isPageLoading = ref(false)

onMounted(() => {
  if (productId) {
    getOneProductData()
  }
})

const submit = () => {

  if (!title.value || !description.value || !price.value || !img.value) {
    alert('Please fill all the fields')
    return
  }

  const obj = {
    title: title.value,
    price: price.value,
    description: description.value,
    image: img.value
  }

  if (productId) {
    updateProductFetch(productId, obj)
  } else {
    submitPostRequest(obj)
  }
}

const updateProductFetch = async (id, obj) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })

    await response.json()
    alert('Product updated successfully!')
    router.push('/')

  } catch (error) {
    console.error(error)
  }
}

const submitPostRequest = async (data) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        category: 'electronics'
      })
    })

    await response.json()
    alert('Product added successfully!')
    router.push('/')

  } catch (e) {
    console.error(e)
  }
}

const getOneProductData = async () => {
  isPageLoading.value = true 

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const data = await response.json()

    title.value = data.title
    description.value = data.description
    price.value = data.price
    img.value = data.image

  } catch (error) {
    console.error(error)
  } finally {
    isPageLoading.value = false
  }
}
</script>







<style scoped>
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 20px;
    height: 80%;
}
input{
    width: 98%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 10px;
    border: 1px solid #ccc;
}
label{
    display: block;
    text-align: left;
    margin-top: 20px;
    margin-left: 9px;
    text-transform: capitalize;
    color: rgb(95, 158, 160);
}
.flex-col{
    flex-direction: column;
}
.border-gray-300{
    border-color: #ccc;
}
.text{
    color: rgb(95, 158, 160);
    font-weight: bold;
    text-transform: capitalize;
}
button{
    margin-top: 20px;
    background-color: rgb(95, 158, 160);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 9px;
}
button:hover{
    background-color: rgb(95, 158, 160,0.5);
    color:white;
}
</style>