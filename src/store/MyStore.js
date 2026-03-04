import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMyStore = defineStore('myStore', () => {

  const myArray = ref([])

  const addItem = (item) => {
    const existingItem = myArray.value.find(p => p.id === item.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      myArray.value.push({
        ...item,
        quantity: 1   // default 1
      })
    }
  }

  const increaseQty = (id) => {
    const item = myArray.value.find(p => p.id === id)
    if (item) item.quantity++
  }

  const decreaseQty = (id) => {
    const item = myArray.value.find(p => p.id === id)
    if (item && item.quantity > 1) {
      item.quantity--
    }
  }

  const removeItem = (id) => {
    myArray.value = myArray.value.filter(p => p.id !== id)
  }

  const totalPrice = computed(() => {
    return myArray.value.reduce((total, item) => {
      return total + (Number(item.price) * item.quantity)
    }, 0)
  })

  return {
    myArray,
    addItem,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice
  }
})