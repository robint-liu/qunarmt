<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pageList" :key="index">
       <div class="area-con">
          <div class="arae-item" v-for="item of page" :key="item.id">
            <img class="area-img" :src="item.imgUrl"/>
            <p class="area-desc">{{item.title}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination personal"  slot="pagination"></div>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    name: 'index-icons',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    computed: {
      pageList () {
        const pages = []
        this.list.forEach((value, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = [] // 初始化多维数组
          }
          pages[page].push(value)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .icons
    height: 3.8rem
    overflow: hidden
    position: relative
    background-color: #fff
    .area-con
      display: flex
      flex-wrap: wrap
      .arae-item
        width: 25%
        height: 1.6rem
        .area-img
          display: block
          margin: .4rem auto .15rem auto
          width: .66rem
          height: .66rem
        .area-desc
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          line-height: .4rem
          text-align: center
    .personal
      position: absolute
      bottom: .1rem
      left: 40%
      height: .3rem
      width: 20%
      background-color: $bgColor
      border-radius: .15rem
      text-align: center
      color: #fff
    .personal >>> .swiper-pagination-bullet
      margin-right: .13rem
      width: .12rem
      height: .12rem
</style>
