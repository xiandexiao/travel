import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import router from './router'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'

Vue.config.productionTip = true
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
