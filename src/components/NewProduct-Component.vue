<template>
<div class="flex ">  
    <div class="border-2 flex-col  border-gray-300 rounded-lg p-8 w-[400px] shadow-lg text-center">
        <h2 class="text-2xl font-bold text">Add new Product</h2>
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

       <button class="button" type="button" @click="submit">Submit</button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const submit = () => {
    try{
        var title = ref('')
        var description = ref('')
        var price = ref('')
        var img = ref('')
        console.log(title,description,price,img)
    
        var obj = {
            title : title,
            price : price,
            description: description,
            image: img
    
        }
        // if(productId){
        //   updateProductFetch(productId,obj)
        // }
        // else{
            
        // }
     submitPostRequest(obj)   
    }

    catch(e){
        console.log(e)
    }
}
const submitPostRequest = async (data) => {
  try{
    var response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            title: data.title,
            price: data.price,
            description: data.description,
            image: data.image,
            category: 'electronics'
        })
    })
    
    var data = await response.json()
    // var allProductList = JSON.parse(localStorage.getItem('ProductList'))
    // allProductList.push(data)
    // localStorage.setItem('ProductList',JSON.stringify(allProductList))
    alert('Product added successfully!')
    // window.location.href = '/' 
    console.log("Successfully created product (mock):", data);
    
  }
  catch(e){
    console.error(e)
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