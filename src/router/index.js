import Vue from 'vue'
import Router from 'vue-router'
import inStore from './routers/in-store.js';
import Page from '@/views/Page.vue';
import SignUp from '@/views/SignUp.vue';
Vue.use(Router)

export default new Router({
  routes: [    
    {  path:'/login',
    name:"page",
    component:Page
    },{  path:'/signup',
    name:"signup",
    component:SignUp
    },  
    ...inStore,
 
  ]
})
