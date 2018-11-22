// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import axios from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vueOption from './assets/js/vue-option'
import hybridApi from '@/assets/js/hybrid-api.js'
import axiosApi from '@/assets/js/axios-api.js'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'
import VuePlugins from '@/assets/plugins/vux-plugins.js';
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.prototype.$axiosApi = axiosApi;
Vue.prototype.$hybridApi=hybridApi;
FastClick.attach(document.body)

Vue.config.productionTip = false
const VueObject=new Vue(vueOption).$mount('#app-box');
//将vue实例对象全局出来
Vue.prototype.$vue=VueObject;
