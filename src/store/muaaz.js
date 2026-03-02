import { defineStore } from "pinia"

export const useMuaazStore = defineStore('muaaz', {
    state: () => ({ 
        count:40,
        name:'Ali',
        firstName:"Ali",
        lastName:"Hamza",
        productData:[]
    }),
    getters: {
     doubleCount: (state) => state.count * 2,
     modDataArray:(state)=> state.productData.map(currentElement =>currentElement  )
    },
    actions: {
      increment() {
        this.count = 50
      },
      changeName(){
       this.name = "usman"
      },

     async dataFetch(){
        var response = await fetch('https://fakestoreapi.com/products')  
      var data  = await response.json()
      this.productData = data;
      }
    },
  })