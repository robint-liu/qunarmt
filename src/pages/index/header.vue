<template>
  <div class="header">
    <router-link to="/">
      <div class="back iconfont">&#xe601;</div>
    </router-link>
    <div class="search">
      <span class="iconfont search-icon">&#xe600;</span>请输入搜索内容···
    </div>
    <router-link to="/city">
      <div class="city">
        {{$store.state.city || local.city}}
      </div>
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.prototype.local = localStorage
  export default {
    name: 'index-header'
  }
</script>

<style lang='stylus' scoped>
  @import '../../assets/stylus/varibles.styl'
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .6rem
      color: #fff
      text-align: center
      font-size: .4rem
      font-weight: bold
    .search
      flex: 1
      height: .6rem
      line-height: .6rem
      margin: .14rem .2rem
      padding-left: .25rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      .search-icon
        position: relative
        top: .001rem
        padding-right: .1rem
    .city
      max-width: 3rem
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      padding-right: .6rem
      position: relative
      color: #fff
      &:before
        position: absolute
        top: .35rem
        right: .2rem
        content: '\0020'
        width: 0
        height: 0
        border-left: 7px solid transparent
        border-right: 7px solid transparent
        border-top: 7px solid #fff
</style>
