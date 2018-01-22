<template>
  <div class="posihot">
    <div class="posihotTop">
      <div class="posihot-left">
        <span class="iconfont first">&#xe602;</span>
        <span>
          附近
        </span>
      </div>
      <div class="posihot-right">
        <span class="iconfont second">&#xe629;</span>
        <span>
          5折泡温泉
        </span>
      </div>
    </div>
    <div class="posihot-recommende">
      热销推荐
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-posihot'
  }
</script>

<style lang="stylus" scoped>
  .posihot
    wdith: 100%
    height: 1.77rem
    background-color: #fff
    border-top: .001rem solid #dddddd
    .posihotTop
      height: .97rem
      width: 100%
      .posihot-left
        border-right: .001rem solid #dddddd
      .posihot-left, .posihot-right
        float:left
        width: 49.9%
        height: .97rem
        line-height: .97rem
        text-align: center
        font-size: .26rem
        color: #151515
        .first, .second
          color: #4f4f4f
          padding-left: .1rem
    .posihot-recommende
      height: .8rem
      line-height: .8rem
      background-color: #f4f4f4
      padding-left: .26rem
      text-align: left
      font-size: .26rem
      color: #151515
</style>
