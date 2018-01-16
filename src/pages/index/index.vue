<template>
  <div class="wrapper">
    <div class="content">
        <index-header></index-header>
        <index-swiper :list="swiperInfo"></index-swiper>
        <index-icons :list="iconsInfo"></index-icons>
        <position-hot></position-hot>
        <produce :list="produceInfo"></produce>
        <weekend :list="weekendInfo"></weekend>
        <nav-box></nav-box>
        <login-bottom></login-bottom> 
    </div>
  </div>
</template>

<script>
  // 充当header.vue局部组件的父组件
  import IndexHeader from './header.vue'
  import IndexSwiper from './swiper.vue'
  import IndexIcons from './icons'
  import PositionHot from './positionhot.vue'
  import Produce from './produce.vue'
  import Weekend from './weekend.vue'
  import NavBox from './nav.vue'
  import LoginBottom from './login.vue'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'index',
    components: {
      IndexHeader, // camelClass写法
      IndexSwiper,
      IndexIcons,
      PositionHot,
      Produce,
      Weekend,
      NavBox,
      LoginBottom
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        produceInfo: [],
        weekendInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconList
        this.produceInfo = data.recommendList
        this.weekendInfo = data.weekendList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData() // 借用生命周期钩子请求ajax
    },
    mounted () {
      /* eslint-disable no-new */
      new BScroll('.wrapper')
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 100%
    height: 13.34rem
    background: #f5f5f5
</style>
