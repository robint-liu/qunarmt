<template>
  <div class="header">
    <div class="back iconfont">&#xe601;</div>
    <h1 class="title">订单填写</h1>
    <div class="city">登录</div> 
  </div>
</template>

<script>
export default {
  name: 'order-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .8rem
      text-align: center
      font-size: .5rem
      font-weight: bold
    .title
      flex: 1
      line-height: .88rem
      font-size: .32rem
      text-align: center
      color: #fff
    .city
      width: .8rem
</style>