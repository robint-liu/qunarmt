<template>
  <div class="desc">
    <div class="desc-left">
      <h2 class="desc-l-title">【上午场】故宫成人票+故宫全景手绘地图</h2>
      <ul class="taglist">
        <li><img src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" alt="">2018-01-16</li>
        <li><img src="https://img1.qunarzz.com/piao/fusion/1703/dc/b515f102c483d002.png" alt="">不可退</li>
      </ul>
    </div>
    <div class="desc-right">
      <p class="desc-r-fare">
        <span class="fare-number">￥<em class="num-color">50</em></span>
        <span>起 /张</span>
      </p>
      <p class="desc-r-notice">预订须知</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-desc'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .desc
    height: 1.36rem
    padding: .2rem .2rem .1rem .2rem
    position: relative
    .desc-left
      width: 5.2rem
      .desc-l-title
        margin-bottom: .04rem
        font-size: .32rem
        line-height: .44rem
        color: #212121     
      .taglist 
        overflow: hidden
        margin-left: -.2rem
        li
          float: left
          margin-left: .2rem
          line-height: .44rem    
          font-size: .24rem
          color: #616161
          img
            position: relative;
            top: .08rem
            width: .24rem
            height: .24rem
            margin-right: .08rem
            vertical-align: top
    .desc-right
      position: absolute
      right: .2rem
      top: .2rem
      width: 1.8rem
      text-align: right
      .desc-r-fare
        height: .44rem
        line-height: .44rem
        color: #9e9e9e
        font-size: .24rem
        .fare-number
          color: #ff8300
          em
            font: .4rem Tahoma
      .desc-r-notice
        margin-top: .12rem
        line-height: .32rem
        color: #00bcd4
        font-size: .28rem
</style>