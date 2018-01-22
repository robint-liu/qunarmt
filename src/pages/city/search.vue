<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名称或拼音" />
  </div>
</template>

<script>
  export default {
    name: 'city-search'
  }
</script>

<style lang='stylus' scoped>
  @import "../../assets/stylus/varibles.styl"
  .search
    height: .72rem
    background-color: $bgColor
    padding: 0 .2rem
    .search-input
      box-sizing: border-box
      line-height: .62rem
      width: 100%
      border-radius: .1rem
      text-align: left
      font-size: .24rem
      padding: 0 .2rem
      color: $fontNormalColor
      margin-bottom: .1rem;

</style>
