import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import 'swiper/swiper-bundle.css'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'

Vue.config.productionTip = true
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
