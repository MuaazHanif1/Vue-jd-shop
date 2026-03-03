<template>
    <header class="flex header">
        <div class="logo">
           <h1 class="logo-font-style text-[30px]">JD</h1>
        </div>
        <nav class="nav">
           <!-- <a href="/index.html" class="margin-10 nav-link">Home</a>
           <a href="#" class="margin-10 nav-link">Shop</a>
           <a href="./about.html" class="margin-10 nav-link">About</a>
           <a href="#" class="margin-10 nav-link">Contact</a>
           <a href="./addnewproduct.html" class="margin-10 nav-link">New Product</a> -->
           <RouterLink  v-for="(current,index ) in navList"  :to="current.path" class="margin-10 nav-link" >
           <span v-if="current.name !== 'Add Product'">{{current.name}}</span> 
           <span v-else-if="user.role == 'admin' && current.name == 'Add Product'">{{current.name}}</span>
           </RouterLink>
        </nav>
    </header>
</template>

<script setup>
 defineProps(['navList','user'])
</script>