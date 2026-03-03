<template>
<div class="flex">  
    <div class="border-2 flex-col  border-gray-300 rounded-lg p-8 w-[400px] shadow-lg text-center">
        <h2 class="text-2xl font-bold text">Add new Product</h2>
        <!--label-->
        <label>Enter Product Title </label>
        <!--input-->
        <input class="border-1 border-black-22" type="text" placeholder="e.g: Men shoes" required id="title">
        <!--label-->
        <label>Enter Product disprection </label>
        <!--input-->
        <input class="border-1 border-black-22" type="text" placeholder="e.g: Men shoes for runing" required  id="description">
        <!--label-->
        <label>Enter Product price </label>
        <!--input-->
        <input class="border-1 border-black-22" type="number" placeholder="e.g: 99.9 $" required id="price">
        <!--label-->
        <label>Enter Product image url </label>
        <!--input-->
        <input class="border-1 border-black-22" type="text" placeholder="Product image url" required id="img">

       <button class="button" type="button" @click="submit" id="button">Submit</button>
    </div>
</div>
</template>
<style scoped>
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 20px;
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
<script setup>
function openAddProductPage(productId) {
    window.location.href = `add-new-product.html?id=${productId}`
}


document.addEventListener('DOMContentLoaded', getOneProductData)


async function getOneProductData() {
    try {
        var params = new URLSearchParams(window.location.search)
        productId = params.get('id')

        if (productId) {
            var allProductData = JSON.parse(localStorage.getItem('products'))
            if (allProductData && allProductData.length > 0) {
                var singleProductData = allProductData.find(current => current.id == productId)
                updateDomWithSigleProductData(singleProductData)
            }
            else {
                var response = await fetch(`https://fakestoreapi.com/products/${productId}`)
                var data = await response.json()
                console.log('data', data)
                updateDomWithSigleProductData(data)
            }
        }
    }
    catch (error) {
        console.error(error)
    }


}

function updateDomWithSigleProductData(obj) {
    document.getElementById('title').value = obj.title
    document.getElementById('description').value = obj.description
    document.getElementById('price').value = obj.price
    document.getElementById('img').value = obj.image
    document.getElementById('button').innerText = "Update"
    document.getElementById('form').innerText = "Update Product"

}
async function submit() {
    try {
        var title = document.getElementById('title').value
        var description = document.getElementById('description').value
        var price = document.getElementById('price').value
        var image = document.getElementById('img').value

        var params = new URLSearchParams(window.location.search)
        productId = params.get('id')

        if (productId) {
            var response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: "PUT",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    price: price,
                    image: image
                })
            })
            var data = await response.json()
            console.log('data', data)
            alert("Product updated successfully")
        }
        else {
            var response = await fetch(`https://fakestoreapi.com/products`, {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    price: price,
                    image: image
                })
            })
            var data = await response.json()
            console.log('data', data)
            alert("Product added successfully")
        }

    }
    catch (error) {
        console.error(error)
    }
}
</script>