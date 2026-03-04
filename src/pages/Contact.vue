<template>
  <div class="contact-container">
    <h1>Contact Us</h1>

    <form @submit.prevent="submitForm" class="contact-form">
      
      <label>Name</label>
      <input type="text" v-model="name" placeholder="Enter your name" required />

     <label>phone number</label>
      <input type="phone number" v-model="phone" placeholder="Enter your phone number" required />




      <label>Email</label>
      <input type="email" v-model="email" placeholder="Enter your email" required />




      <label>Message</label>
      <textarea v-model="message" placeholder="Write your message" required></textarea>

      <button type="submit">Send Message</button>

    </form>

    <div v-if="submitted" class="success-msg">
      ✅ Message Sent Successfully!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function submitForm() {
  submitted.value = true

  // Reset form
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-container {
  width: 33%;
  height: 555px;
  margin: 100px auto;
  padding: 35px;
  background: rgba(51, 73, 102, 0.533);
  border-radius: 50px;
  box-shadow: 0 5px 13px rgba(0,0,0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  font-weight: bold;
}

input, textarea {
  padding: 9px;
  margin-top: 8px;
  border-radius: 6px;
  border: 3px solid rgb(170, 204, 199);
  width: 80%;
  background-color: white;
}

textarea {
  resize: none;
  height: 70px;
}

button {
  margin-top: 25px;
  padding: 10px;
  background: #42b87760;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #5d9836;
}

.success-msg {
  margin-top: 15px;
  text-align: center;
  color: rgb(83, 128, 0);
  font-weight: bold;
}
</style>