<template>
  <div class="bottom">
    <div class="price-area">
      <span>产品价格￥</span>
      <em class="total-price">{{content*50}}</em>
    </div>
    <a class="submit-order" href="javaScript:;">提交订单</a>
  </div>
</template>
<script>
export default {
  name: 'order-submit',
  props: {
    content: Number
  }
}
</script>

<style lang="stylus" scoped>
  .bottom
    display: flex
    position: fixed
    z-index: 92
    right: 0
    bottom: 0
    left: 0
    width: 100%
    height: 1rem
    background: #fff
    .price-area
      width: 50%
      position: relative
      font-size: .24rem
      line-height: 1rem
      text-indent: .2rem
      color: #ff8300
      .total-price
        font-size: .48rem
    .submit-order
      flex: 1
      line-height: 1rem
      text-align: center
      font-size: .36rem
      color: #fff
      background: #ff8300
</style>