<template>
<HeaderComponent/>
<div class="container">
<div class="students">
  <h1>Students in Web development 2nd batch</h1>
  <ol>
<li>M.ABDULLAH ARSHAD</li>
<li>Talha</li>
<li>Maria!!</li>
<li>iqra</li>
<li>umaima</li>
<li>Naqi sab</li>
</ol>
</div>
</div>
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
  padding: 20px;
}
li{
  font-size: 23px;
  margin-top: 10px;
  text-transform: uppercase;
}
h1{
  color:blue;
  text-transform: capitalize;
}
/* .color-blue{
  color:blue
} */
</style>