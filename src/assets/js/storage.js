import Vue from 'vue';
export default {
    url:function(){
        let _url="";
if(process.env.NODE_ENV === 'production'){
    // _url=localStorage.getItem('url')+'/api/invoke'
    _url=Vue.prototype.$vue.$store.getters.getUrl
}else{
    _url='/api/invoke'
}
        return _url},
    ticket:function(){  
       return  Vue.prototype.$vue.$store.getters.getTicket
    },
    orgid:function(){
         return Vue.prototype.$vue.$store.getters.getOrgId
        
    }  
    
}