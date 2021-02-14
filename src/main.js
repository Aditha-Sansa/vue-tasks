import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import './assets/css/tailwind.css'

Vue.config.productionTip = false


new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
