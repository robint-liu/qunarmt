<template>
  <div class="tourList">
    <div class="tourGroup" v-for="item of content">
      <div class="tourName format">
        <p class="rowTitle">游客<em class="tourCount">{{item}}</em></p>
        <div class="rowInfo">
          <!-- <label :class="{isBlur: Isblur}">游客姓名</label> -->
          <input type="text" name="" placeholder="游客姓名" >
        </div>
      </div>
      <div class="tourPhone format">
        <p class="rowTitle">手机号</p>
        <div class="rowInfo">
          <em class="code">+86</em>
          <!-- <label :class="{isBlur: Isblur}">请填写手机号</label> -->
          <input type="text" name="" placeholder="请填写手机号">
        </div>
      </div>
      <div class="tourIdcard format">
        <p class="rowTitle">身份证</p>
        <div class="rowInfo">
          <!-- <label :class="{isBlur: Isblur}">请填写正确的身份证号码</label> -->
          <input type="text" name="" placeholder="请填写正确的身份证号码" @blur="handleChangeColor">
        </div>
      </div>
    </div>
    <div class="advi">
      咨询电话
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-header',
  props: {
    content: Number
  },
  data () {
    return {
      Isblur: false
    }
  },
  methods: {
    handleChangeColor () {
      this.Isblur = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .tourList
    height: 8.15rem
    overflow-y: scroll
    background: #f1f1f1
    .advi
        height: .4rem
        padding: .2rem
        text-align: right
        color: #00afc7
        font-size: .24rem
    .tourGroup
      margin-bottom: 0.2rem
      background: #fff
      .format
        display: flex
        height: .52rem
        padding: .24rem
        border-bottom: .02rem solid #ccc
        .rowTitle
          width: 1.6rem
          color: #616161
          font-size: .3rem
          line-height: .5rem
        .rowInfo
          flex: 1
          position: relative
          .code
            display: inline-block
            height: .52rem
            line-height: .52rem
            min-width: .4rem
            max-width: 1rem
            margin-right: .1rem
            padding: 0 .24rem 0 .06rem
            border: .02rem solid #ccc
          .isBlur
            color: red
            display: block
          label
            display: none
            position: absolute
            top:.08rem
          input
            border: none  
</style>