import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('pages/index/index')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('pages/order/index')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('pages/city/index')
    }
  ]
})
