import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
    state: () => ({ user:{
        name:'AnyName',
        email:"any@gmail.com",
        phone:"030467xxx"
    },
     studentRecord : [{name:'Ali', number:30},{name:'Ali1', number:39,class:"10"},{name:'Ali2', number:40},{name:'Ali3', number:60},{name:'Ali4', number:32},{name:'Ali5', number:70},{name:'Ali6', number:80},{name:'Ali7', number:90},{name:'Ali8', number:9},]
}),
    getters: {
    //   doubleCount: (state) => state.count * 2,
    },
    actions: {
    //   increment() {
    //     this.count++
    //   },
    },
  })