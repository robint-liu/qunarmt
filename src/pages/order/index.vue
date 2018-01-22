<template>
  <div>
    <order-header></order-header>
    <order-desc></order-desc>
    <order-ticket @change="handleChangeNum"></order-ticket>
    <order-tourist :content="conut"></order-tourist>
    <order-submit  :content="conut"></order-submit>
  </div>
</template>

<script>
  export default {
    name: 'Order',
    data () {
      return {
        conut: 1
      }
    },
    components: {
      OrderHeader: () => import('./header'),
      OrderDesc: () => import('./desc'),
      OrderTicket: () => import('./tickets'),
      OrderTourist: () => import('./tourists'),
      OrderSubmit: () => import('./submit')
    },
    methods: {
      handleChangeNum (value) {
        this.conut = value
      }
    }
  }
</script>

<style></style>