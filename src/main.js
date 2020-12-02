import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = true
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
