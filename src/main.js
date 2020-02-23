import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// mock开关
const mock = true

if(mock){
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
