<template>
  <div style="display: flex; justify-content: center; align-items: center; ">
  <div style="display: flex; justify-content: center; align-items: center; background-color: white; border: 2px solid black; width: 70%; padding: 20px; border-radius: 10px; margin-top: 30px; margin-bottom: 20px;">
     <div v-if="store.myArray.length === 0" class="text-2xl font-bold text-gray-500">
      Your cart is empty.
    </div>
    <div 
      v-for="item in store.myArray"
      :key="item.id"
      style="display: flex; justify-content: space-between; align-items: center; border: 1px solid #ccc; padding: 20px; border-radius: 10px; margin-bottom: 20px; width: 100%;"
      class="bg-white"
    >
    <!-- LEFT SIDE (Image + Details) -->
      <div class="flex gap-6 items-center">
        <img 
          :src="item.image"
          class="w-[140px] h-[140px] object-contain"
        />
        <div>
          <h2 class="text-lg font-semibold w-[500px]">
            {{ item.title }}
          </h2>
          <!-- Quantity Controls -->
          <div class="flex items-center gap-3 mt-4">
            <!-- Delete Icon -->
            <button 
              @click="store.removeItem(item.id)"
              class="text-gray-600 hover:text-red-600 "
            >🗑</button>
            <!-- Quantity Box -->
            <div class="flex items-center border rounded-full overflow-hidden">
              <button 
                @click="store.decreaseQty(item.id)" style="background-color: none; color: black;">-</button>
              <span class="px-4 text-4xl font-semibold" style="padding-left: 14px; padding-right: 14px;">{{ item.quantity }}</span>
              <button 
                @click="store.increaseQty(item.id)" style="background-color: none; color: black;">+</button>
            </div>
          </div>
        </div>
      </div>
      <!-- RIGHT SIDE (Price) -->
      <div class="text-xl font-bold text-green-700">
        Rs {{ item.price * item.quantity }}
      </div>
    </div>
  </div>
  </div>
  <div>
    <h2 class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase underline mt-60px text-center mb-4" style="margin-bottom: 20px;">Total Price: {{ store.totalPrice }}</h2>
    </div>
</template>

<script setup>
import { useMyStore } from '@/store/MyStore'
const store = useMyStore()
</script>