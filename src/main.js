// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body) // 引用第三方模块，解决移动端300毫秒延迟的问题
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>', // 固定用法
  components: { App }
})
