<template>
  <div class="ticket">
    <div class="tick-num">
      <div class="tick-num-l">购买数量</div>
      <div class="tick-num-c">
        <span>最多买5张</span>
      </div>
      <div class="tick-num-r">
        <em class="minus" :class="{'disabled':limitMin}" @click="handleMinus">-</em>
        <input class="input-num" type="text" max="5" min="1" :value="value">
        <em class="plus" :class="{'disabled':limitMax}" @click="handleAdd">+</em>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-ticket',
  data () {
    return {
      value: 1,
      limitMin: true,
      limitMax: false
    }
  },
  methods: {
    handleAdd () {
      if (this.value < 5) {
        this.value += 1
        this.changeCount()
      }
    },
    handleMinus () {
      if (this.value > 1) {
        this.value -= 1
        this.changeCount()
      }
    },
    changeCount () {
      if (this.value < 5 && this.value > 1) {
        this.limitMin = false
      } else if (this.value === 1) {
        this.limitMin = true
        this.limitMax = false
      } else {
        this.limitMax = true
      }
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .ticket
    padding: .2rem 0
    background: #f0f0f0
  .tick-num
    display: flex
    height: .64rem
    padding: .3rem .2rem
    background: #fff
    .tick-num-l
      width: 1.6rem
      position: relative
      top: .12rem
      color: #616161
      font-size: .3rem
      line-height: .5rem
    .tick-num-c
      flex: 1
      margin-left: -.2rem
      color: #ccc;
      font-size: .28rem
      line-height: .64rem
    .tick-num-r
      display: inline-block
      position: relative
      border: .02rem solid #c7ced4
      .input-num
        width: .6rem
        height: .6rem
        border: none
        text-align: center
        vertical-align: top
      .minus,.plus
        display: inline-block
        width: .56rem
        height: .56rem
        margin: .02rem
        text-align: center
        font: .6rem/.5rem ""
        font-weight: bold
        color: #fff
        background-color: #00afc7
      .disabled
        color: #ccc
        background: #f0f0f0
</style>