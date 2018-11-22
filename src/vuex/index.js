import Vue from 'vue';
import Vuex from 'vuex';
import Mutations from './mutations'
import Getters from './getters'
import Login from './modules/login';
import UserInfo from './modules/user-info';
Vue.use(Vuex)
const store = new Vuex.Store({
    strict: true,
    state: {  
          //  isLogin:false,   
    },      
    getters:Getters,
    mutations:Mutations,
    modules:{login:Login,userInfo:UserInfo}
    
  })
export default store