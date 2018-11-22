<template>
  <div id="app">
        <drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showModeValue"
    :placement="showPlacementValue"
    :drawer-style="{'background-color':'#35495e', width: '200px'}">
        <keep-alive>
           <router-view v-if="$route.meta.keepAlive" ></router-view>
        </keep-alive>
           <router-view v-if="!$route.meta.keepAlive"></router-view>
        </drawer>
  </div>
</template>
<script>
import { XHeader,Card,Search,Rater,Drawer    } from 'vux'
export default {
    components: {
    XHeader,
    Card,
    Search,
    Rater,
    Drawer 
  },
  name: "app",
  data(){
    return{
      drawerVisibility: true,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left'
    }
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import "./assets/css/global.less";

</style>
