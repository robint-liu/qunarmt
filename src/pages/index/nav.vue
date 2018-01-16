<template>
  <div class="navBox">
    <div class="price">
      <span class="iconfont paper">&#xe670;</span>
      <span class="bigword">票面价</span>
      是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
    <div class="theme" :style="{height:isheight+'rem'}">
      <ul>
        <li>
          <span class="iconfont">&#xe686;</span>
          <span class="themeWord">机票</span>
        </li>
        <li>
          <span class="iconfont">&#xe631;</span>
          <span class="themeWord">酒店</span>
        </li>
        <li>
          <span class="iconfont">&#xe8e9;</span>
          <span class="themeWord">公寓</span>
        </li>
        <li>
          <span class="iconfont">&#xe61b;</span>
          <span class="themeWord">团购</span>
        </li>
        <li>
          <span class="iconfont">&#xe638;</span>
          <span class="themeWord">火车票</span>
        </li>
        <li>
          <span class="iconfont">&#xe623;</span>
          <span class="themeWord">景点</span>
        </li>
        <li>
          <span class="iconfont">&#xe6d0;</span>
          <span class="themeWord">接送机</span>
        </li>
        <li>
          <span class="iconfont">&#xe625;</span>
          <span class="themeWord">度假</span>
        </li>
        <li>
          <span class="iconfont">&#xe619;</span>
          <span class="themeWord">攻略</span>
        </li>
        <li>
          <span class="iconfont">&#xe73f;</span>
          <span class="themeWord">旅图</span>
        </li>
        <li>
          <span class="iconfont">&#xe624;</span>
          <span class="themeWord">车车</span>
        </li>
        <li>
          <span class="iconfont">&#xe636;</span>
          <span class="themeWord">当地人</span>
        </li>
        <li class="iconfontSpec" @click="handleChange" :style="{top:istop+'rem'}">
          <span class="iconfont" v-html="isiconfont"></span>
          <span class="themeWordSpec">更多</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-nav',
    data () {
      return {
        isheight: 0.62,
        count: 0,
        istop: 0,
        isiconfont: '&#xe643;'
      }
    },
    methods: {
      handleChange () {
        this.count = this.count + 1
        if (this.count % 2 === 1) {
          this.isheight = 2.6
          this.isiconfont = '&#xe642;'
          this.istop = 1.9
        } else {
          this.isheight = 0.62
          this.isiconfont = '&#xe643;'
          this.istop = 0
        }
      }
    }

  }
</script>

<style lang = "stylus" scoped>
  .navBox
    box-sizing: border-box
    width: 100%
    padding-top: .1rem
    background-color: #f3f3f3
    .price
      height: .62rem
      line-height: .62rem
      padding-left: .13rem
      text-align: left
      background-color: #fff
      font-size: .2rem!important
      color: #666
      .paper
        font-size: .2rem!important
      .bigword
        font-size: .22rem
        color: #000
    .theme
      box-sizing: border-box
      position: relative
      overflow: hidden
      padding-left: .96rem
      line-height: .62rem
      text-align: left
      color: #999
      ul li
        display: inline-block
        height: .62rem
        width: 1.5rem
        .iconfont
          font-size: .3rem!important
        .themeWord
          font-size: .24rem!important
          text-decoration: underline
      ul .iconfontSpec
        position: absolute
        right: .3rem
        text-align: left
        background-color: #f3f3f3
</style>
