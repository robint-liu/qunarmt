// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/css/common/reset.css'
import 'assets/css/common/border.css'
import 'assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import store from '@/store/index.js'

Vue.use(VueLazyload, {
  preLoad: 1.5,
  error: 'http://img.zcool.cn/community/01539f59422c5ea8012193a3d21f93.gif',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516180858253&di=3882b5aebc4a2c72b0a0d49f9d9eaebb&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e92856a5f74f6ac7256cb06ae5ce.gif',
  attempt: 1
})

FastClick.attach(document.body) // 引用第三方模块，解决移动端300毫秒延迟的问题
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
