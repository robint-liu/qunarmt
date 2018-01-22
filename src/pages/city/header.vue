<template>
  <div class="header">
    <div class="title">
      <router-link to="/">
        <div class="back iconfont">&#xe601;</div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-header'
  }
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/varibles.styl"
  .title
    height: .88rem
    line-height: .88rem
    position: relative
    background-color: $bgColor
    text-align: center
    font-size: .36rem
    color: #fff
    .back
      position: absolute
      left: 0
      top: 0
      width: .84rem
      line-height: .88rem
      font-size: .444rem
      color: #fff
      font-weight: bold
</style>