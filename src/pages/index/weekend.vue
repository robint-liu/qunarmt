<template>
  <div class="weeekendBox">
    <div class="weeekend">
      周末去哪儿
    </div>
    <div class="weekendItem" v-for="item of list" :key="item.id">
      <div class="img">
        <img v-lazy="item.imgurl" :alt="item.title">
      </div>
      <div class="word">
        <span class="title" v-text="item.title"></span>
        <span class="introduce" v-text="item.introduce"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-weekend',
    props: {
      list: Array
    }
  }
</script>

<style lang = "stylus" scoped>
  .weeekendBox
    height: 21.55rem
    width: 100%
    background-color: #fff
    .weekendItem
      height: 4.15rem
      box-sizing: border-box
      .img
        height: 2.81rem
        img
          height: 100%
      .word
        display: flex
        height: 1.34rem
        width: 100%
        padding-left: .22rem
        flex-direction: column
        justify-content: space-around
        span
          display: block
        .title
          padding-top: .1rem
          font-size: .26rem
          color: #000
        .introduce
          padding-bottom: .2rem
          font-size: .2rem
          color: #666
    .weeekend
      height: .8rem
      line-height: .8rem
      background-color: #f4f4f4
      padding-left: .26rem
      text-align: left
      font-size: .26rem
      color: #151515
</style>
