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
  import OrderHeader from './header'
  import OrderDesc from './desc'
  import OrderTicket from './tickets'
  import OrderTourist from './tourists'
  import OrderSubmit from './submit'
  export default {
    name: 'Order',
    data () {
      return {
        conut: 1
      }
    },
    components: {
      OrderHeader,
      OrderDesc,
      OrderTicket,
      OrderTourist,
      OrderSubmit
    },
    methods: {
      handleChangeNum (value) {
        this.conut = value
      }
    }
  }
</script>

<style></style>