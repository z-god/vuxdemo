import router from '@/router'
import App from '@/App'
import store from '@/vuex'
export default{
    router,
    store,
    render: h => h(App)
  }