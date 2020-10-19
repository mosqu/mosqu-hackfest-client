import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import store from './store/auth'

axios.defaults.baseURL = 'http://mosqu-service.herokuapp.com'
Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(Vuex)

new Vue({
  router,
  vuetify,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')