<template>
  <div class="bottomBox">
    <ul>
      <li>登录</li>
      <li @click="handleClick">我的订单</li>
      <li>最近浏览</li>
      <li>关于我们</li>
    </ul>
    <div class="loginBottom">
      <span class="firstSpan">触屏版</span>
      <span>电脑版</span>
      <p>Qunar 京ICP备05021087意见反馈</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-bottom',
    methods: {
      handleClick () {
        this.$router.push('/order?name=order')
      }
    }
  }
</script>

<style lang = "stylus" scoped>
  .bottomBox
    height: 2rem
    width: 100%
    background-color: #f3f3f3
    ul
      height: .8rem
      line-height: .8rem
      text-align: left
      padding-left: .4rem
      font-size: .26rem
      color: #4e95a7
      border-bottom:.02rem solid #c4c4c4
      li
        display: inline-block
        padding-right: .45rem
    .loginBottom
      height: 1.17rem
      width: 100%
      span
        display: inline-block
        font-size: .26rem
        height: .66rem
        line-height: .66rem
        width: 1.46rem
        color: #4e95a7
      .firstSpan
        margin-left: 2.3rem
        color: #000
      p
        color: #999
        text-align:center
</style>
