import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/modules/OrdersStore.js'
import App from './App.vue'
import Router from './router'

Vue.config.productionTip = false

Vue.use(Vuex);
const vueStore = new Vuex.Store(store);

new Vue({
  router: Router,
  store: vueStore,
  render: h => h(App)
}).$mount('#app')
