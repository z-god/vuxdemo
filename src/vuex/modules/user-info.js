export default {
   state:{
   userName:"",
   userCode:"",
   ticket:"",
   url:"",
 //    password:"", 
   userId:0,
   orgId:0},
   mutations:{
       changeUserInfo(state,{attr,val}){
           state[attr]=val
       }
   },
   getters:{
    getUserCode(state){
           return state.userCode
       },
    getTicket(state){
        return state.ticket
    },
    getOrgId(state){
        return state.orgId
    },
    getUserName(state){
        return state.userName
    },
    getUrl(state){
        return state.Url
    },
    getUserId(state){
        return state.userId
    },
    getOrgId(state){
        return state.orgId
    }
   },
   actions:{
    changeUserInfo(context,{attr,val}){
        context.commit('changeUserInfo',{attr,val})
    }
   }
   
    
}
