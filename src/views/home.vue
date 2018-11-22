<template>
    <div class="g-main">
        <x-header>主页</x-header>
        <div class="u-card">
            <img :src="imgsrc" alt="" />
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
      return{
          nickname:''
      }
  },
  computed:{
      imgsrc(){
          return localStorage.getItem('avatar')
      }
  },
  methods:{

  },
  watch:{

  },
  beforeCreate(){
  }

}
</script>

<style lang="less">
.g-main{
    height: 100vh;
    background-color:#303133;
    position: relative;
    .u-card{
 position: absolute;
  height: 200px;
  width: 300px;
  background-color: rgba(0,0,0,.3);
  top:50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
    }
    .vux-header{
        background-color: #606266;
    }
}
</style>
