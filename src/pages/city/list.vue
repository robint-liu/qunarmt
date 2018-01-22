<template>
  <div class="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前位置</div>
        <div class="content">
          <div class="button">

            <div class="button-text button-active">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="content">

          <div class="button" v-for="item in hotcitylist">
            <div class="button-text" :class="{'button-active': item.name === city}" @click="handleClick">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in list">
        <div class="title border-topbottom">{{item.classify}}</div>
        <div class="content">
          
          <div class="content-item border-bottom" v-for="innerItem in item.cityList" @click="handleClick">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import BSscroll from 'better-scroll'
  
  export default {
    name: 'city-list',
    props: {
      list: Array,
      hotcitylist: Array
    },
    methods: {
      ...mapMutations(['reloadCiy']),
      handleClick (e) {
        this.reloadCiy(e.target.innerText)
        this.$router.go(-1)
      }
    },
    computed: {
      ...mapState({
        city (state) {
          return state.city || '北京'
        }
      })
    },
    mounted () {
      /* eslint-disable no-new */
      new BSscroll('.wrapper')
    }
  }
</script>

<style lang='stylus' scoped>
  @import "../../assets/stylus/varibles.styl"
  .area
    .title
      line-height: .54rem
      padding-left: .3rem
      background-color: #f5f5f5
      color: #616161
      font-size: .26rem
      &::before, &::after
        border-color: #9e9e9e
    .content
      padding: 0 .4rem .2rem .2rem
      overflow: hidden
      .button
        float: left
        width: 33.33%
        .button-text
          line-height: .6rem
          margin: .2rem .1rem
          border: .02rem solid #999
          border-radius: .06rem
          text-align: center
        .button-active
          color: $bgColor
          border-color: $bgColor
      .content-item
        line-height: .6rem
</style>
