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
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'index',
    components: {
      IndexHeader: () => import('./header.vue'),
      IndexSwiper: () => import('./swiper.vue'),
      IndexIcons: () => import('./icons'),
      PositionHot: () => import('./positionhot.vue'),
      Produce: () => import('./produce.vue'),
      Weekend: () => import('./weekend.vue'),
      NavBox: () => import('./nav.vue'),
      LoginBottom: () => import('./login.vue')
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        produceInfo: [],
        weekendInfo: [],
        iscity: ''
      }
    },
    methods: {
      ...mapMutations(['reloadCiy']),
      getIndexData () {
        this.iscity = localStorage.city ? localStorage.city : ''
        axios.get('/api/index.json?address=' + this.iscity)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null // 容错处理, 判断错误在哪里发生，前端或后端
        if (res && res.ret && res.data) { // 容错处理
          res.data.swiperList && (this.swiperInfo = res.data.swiperList)
          res.data.iconList && (this.iconsInfo = res.data.iconList)
          res.data.recommendList && (this.produceInfo = res.data.recommendList)
          res.data.weekendList && (this.weekendInfo = res.data.weekendList)
          // 第一次进入
          if (!this.iscity) {
            res.data.city && (this.reloadCiy(res.data.city || this.iscity))
          }
        }
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    computed: {
      ...mapState(['city'])
    },
    created () {
      this.getIndexData() // 借用生命周期钩子请求ajax
    },
    mounted () {
      /* eslint-disable no-new */
      new BScroll('.wrapper')
    },
    watch: {
      city () {
        this.getIndexData()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: #f5f5f5
</style>
