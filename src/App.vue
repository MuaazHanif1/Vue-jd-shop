<template>
  <HeaderComponent :navList="linkList" :user="user"></HeaderComponent>
  <main>
    <RouterView />
  </main>
</template>

<script setup>

 import HeaderComponent from './components/Header-Component.vue';
// import StudentComponent from './components/Student-Component.vue';
 const linkList = [{name:'Home',path:"/"},{name:'shop',path:"/shop"},{name:'about',path:"/about"},{name:'Contact',path:"/contact"},{name:'Add Product',path:"/product"}]


const user= {
  name:'muaaz',
  role:'admin'
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 50vh;
}
.students{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 20px;
  padding: 30px;
}
ul{
  padding: 10px;
  font-size: 30px;
  margin: 35px;
  font-weight:900;
  color: rgb(48, 84, 85);
}
h1{
  
  color:rgb(26, 48, 49);
  text-transform: capitalize;
}
li{
  text-transform: capitalize;
}
/* .color-blue{
  color:blue
} */
</style>