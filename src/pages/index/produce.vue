<template>
  <div class="producebox">
    <div class="produce-item" v-for="(item, index) of list" :key="item.id">
      <div class="left">
        <img v-lazy="item.imgurl" alt="">
      </div>
      <div class="right">
        <div class="title">{{item.title}}</div>
        <div class="produce">{{item.introduce}}</div>
        <div class="details">
          <span class="iconfont icon">&#xe634;</span>
          <span class="price">{{item.price}}</span>
          <span class="font">起</span>
        </div>
      </div>
    </div>
    <div class="produce-bottom">
      查看所有产品
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-produce',
    props: {
      list: Array
    }
  }
</script>

<style lang = "stylus" scoped>
@import "../../assets/stylus/varibles.styl"
  .producebox
    width: 100%
    min-height: 5.14rem
    overflow: hidden
    background-color: #fff
    box-sizing: border-box
    .produce-item
      box-sizing: border-box
      height: 1.87rem
      width: 100%
      display: flex
      justify-content: space-between
      border-bottom: .001rem solid #d7d7d7
      padding: .23rem
      .left
        width: 1.4rem
        height: 1.4rem
        img
          width: 100%
          height: 100%
      .right
        box-sizing: border-box
        flex: 1
        height: 1.41rem
        padding-left: .2rem
        font-size: .26rem
        text-align: left
        .title
          display: block
          color: #000
          height: .34rem
          line-height: .34rem
        .produce
          display: block
          height: .59rem
          line-height: .59rem
          color: #9f9f9f
        .details
          display: block
          height: .47rem
          line-height: .47rem
          color: #f69500
          .icon
            font-size: .18rem!important
          .price
            font-size: .26rem
          .font
            font-size: .22rem
            color: #9f9f9f
    .produce-bottom
      height: .88rem
      line-height: .88rem
      font-size: .28rem
      text-align: center
      color: $bgColor
</style>
