<template>
<HeaderComponent/>
<h1>Talha</h1>
<h1>Welcome to my website 1</h1>
<br>
<h1>Maria!!</h1>
<h1>iqra</h1>
<h1>umaima</h1>
<h1>Naqi  gujjar sab</h1>
</template>
<script setup>
import HeaderComponent from './components/Header-Component.vue';
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