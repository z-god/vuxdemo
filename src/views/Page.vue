<template>
<div class="g-home">
  <div class="u-back">
<img src="@/assets/img/p23.png" alt="">
  </div>
  
  <!-- <div class="u-logo">
    <img src="http://www.newman.wang/myblog1/public/static/img/meta.png" alt="">
  </div> -->
<div class="u-signup">
  <div class="m-login">
  <x-input title="电话" v-model="phoneNumber" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
  <x-input title="密码" v-model="passWord" placeholder="请输入密码" is-type="password"></x-input>
  <x-button  @click.native="login" type="primary">确认</x-button>
  </div>
  <div class="m-siginup" @click="signUp">
    没有账号？点击注册
  </div>
</div>
</div>
</template>

<script>

import { XHeader,Card,Search,Rater,Drawer,XInput,XButton     } from 'vux'
export default {
  components: {
    XHeader,
    Card,
    Search,
    Rater,
    Drawer,
    XInput,
    XButton
  },
  data(){
      return { 
        phoneNumber:'',
        passWord:''
    }
  },
  methods:{
    login(){
   let that = this
   this.$axios({
    url:that.HOST+'/api/u/login',
    method: 'POST',
    data:{'phoneNumber':that.phoneNumber,'passWord':that.passWord},
   //mode:'cors',
   headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
   }
  }).then(function (res) {
   if(res.data.success){ 
   console.log(res.data)
   var avatar = res.data.user.avatar
   var nickname = res.data.user.nickname
   localStorage.setItem('avatar',avatar)
   localStorage.setItem('name',nickname)
   that.$router.push('/instore')
   }
   else{
     alert('账号或密码错误')
   }
  });
 },
 signUp(){
   this.$router.push('/signup')
 }

  },
  mounted(){
  }
}
</script>

<style  lang="less">
@import '../assets/css/reset.less';
.g-home{
  height: 100vh;
  position: relative;
.u-logo{
    position: absolute;
    top:10%;
    left: 50%;
    transform: translateX(-50%)
  }
    img{
    height: 100vh;
  }
.u-back{
  position: absolute;
  left: 60%;
  transform: translateX(-50%);
}
  .u-signup{
  position: absolute;
  height: 300px;
  width: 300px;
  background-color: rgba(0,0,0,.3);
  top:60%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 20px;
}
.m-login{
  margin-top:40%;
  transform:translateY(-50%) 
}
.m-siginup{
  text-align: center;
}
.weui-btn_primary{
  background-color: #303133;
}
}  

</style>
