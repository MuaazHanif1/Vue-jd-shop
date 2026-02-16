<template>
    <header class="flex header">
        <div class="logo">
           <h1 class="logo-font-style">JD</h1>
        </div>
        <nav class="nav">
           <!-- <a href="/index.html" class="margin-10 nav-link">Home</a>
           <a href="#" class="margin-10 nav-link">Shop</a>
           <a href="./about.html" class="margin-10 nav-link">About</a>
           <a href="#" class="margin-10 nav-link">Contact</a>
           <a href="./addnewproduct.html" class="margin-10 nav-link">New Product</a> -->
           <a href="#" v-for="(current,index ) in navList" class="margin-10 nav-link" >
           <span v-if="user.role == 'user' && current.name !== 'Add Product'">{{current.name}}</span> 
        </a> 
        </nav>
    </header>
</template>

<script setup>
 defineProps(['navList','user'])
</script>