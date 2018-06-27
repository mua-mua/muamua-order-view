import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js'
import App from './App.vue'
import Router from './router'

Vue.config.productionTip = false

Vue.use(Vuex);
new Vue({
  router: Router,
  store,
  render: h => h(App)
}).$mount('#app')
