<template>
  <div class="main">
    <city-header></city-header>
    <city-search></city-search>
    <city-list class="list" 
        :list='list' 
        :hotcitylist='hotcitylist'>
    </city-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      list: [],
      hotcitylist: []
    }
  },
  components: {
    CityHeader: () => import('./header.vue'),
    CitySearch: () => import('./search.vue'),
    CityList: () => import('./list.vue')
  },
  methods: {
    getListInfo () {
      axios.get('/api/city.json')
      .then(this.handleGetListSucc.bind(this))
      .catch(this.handleGetListErr.bind(this))
    },
    handleGetListSucc (res) {
      res && (res = res.data)
      if (res && res.data) {
        res.data.list && (this.list = res.data.list)
        res.data.hotcitylist && (this.hotcitylist = res.data.hotcitylist)
      } else {
        this.handleGetListErr()
      }
    },
    handleGetListErr () {
      console.log('请求失败！')
    }
  },
  created () {
    this.getListInfo()
  }
}
</script>

<style scoped lang="stylus">
  .main
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    .list
      overflow: hidden
      flex: 1
</style>