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
  <x-input title="昵称" v-model="nickname" placeholder="请输入昵称"  is-type="china-name"></x-input>
  <x-input title="电话" v-model="phoneNumber" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
  <x-input title="密码" v-model="passWord" placeholder="请输入密码" is-type="password"></x-input>
  <x-button  @click.native="signUp" type="primary">确认</x-button>
  </div>
    <div class="m-siginup" @click="login">
    已有账号？点击登录
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
          nickname:'',
        phoneNumber:'',
        passWord:''
    }
  },
  methods:{
    signUp(){
   let that = this
   this.$axios({
    url:that.HOST+'/api/u/signup',
    method: 'POST',
    data:{'nickname':that.nickname,'phoneNumber':that.phoneNumber,'passWord':that.passWord},
   //mode:'cors',
   headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
   }
  }).then(function (res) { 
    console.log(res)
   if(res.status === 200){
   alert(res.data.err)
   }
  });
 },
 login(){
this.$router.push('/login')
 }

  },
  mounted(){
  }
}
</script>

<style scoped lang='less'>
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
    margin-top:-10%;
  text-align: center;
}
.weui-btn_primary{
  background-color: #303133;
}
}  

</style>
