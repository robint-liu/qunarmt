import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import Order from '@/pages/order/order.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
