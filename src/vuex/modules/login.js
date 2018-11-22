export default {
    // namespaced: true,
      state: {
        isLogin:false,
      }, 
      getters:{
        isLogin(state){
            return state.isLogin
          },
        
      }, 
    mutations:{
    login(state){
        state.isLogin=true
      }, 
      logoff(state){
        state.isLogin=false
      }   
    },
    actions:{
        login(context){
            context.commit('login');
            // context.commit('changeTest')
        },
        logoff(context){
            context.commit('logoff');
        }
    }
}