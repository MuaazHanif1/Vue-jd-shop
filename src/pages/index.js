import { createWebHistory, createRouter } from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'
import NewProduct from './NewProduct.vue' 
import Shop from './Shop.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path:'/shop', component:Shop},
  {path:'/product/:id?', component:NewProduct},
  {path:'/contact', component:Contact},

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})