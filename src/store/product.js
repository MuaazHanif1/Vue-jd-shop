import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('myStore', () => {
  const myArray = ref([])  // Ye tumhara array hai

  const addItem = (item) => {
    myArray.value.push(item)
  }

  return { myArray, addItem }
})