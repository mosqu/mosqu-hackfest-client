import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import store from './store/auth'
import VueMoment from 'vue-moment'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? process.env.VUE_APP_LOCALHOST : 'https://mosqu-service.herokuapp.com';
Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(Vuex)

var moment = require('moment')
moment.locale('id')

Vue.use(VueMoment, { moment })

new Vue({
  router,
  vuetify,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')