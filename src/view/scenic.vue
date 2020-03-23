<template>
  <div id="scenic">
    <commonNav :navText="navText"></commonNav>
    <commonHeader :bannerList="bannerList" :scenicSpotAreaId="scenicSpotAreaId" :height="true" :areaId.sync="areaId" @update:areaId="areaId = $event" @searchClick="searchClick"></commonHeader>
    <div class="scenic-tab clearfix">
      <router-link :to="'/scenicList?areaId=' + areaId" tag="span">热门推荐</router-link>
      <router-link :to="'/scenicList?areaId=' + areaId" tag="span">人气乡村</router-link>
    </div>
    <div class="scenic-content">
      <div class="xiangsu-select-box">
        <selectTag v-for="(item,index) in selectTag" :key="index" :isFirst="index==0" :items="item.items" :text="item.text" ></selectTag>
      </div>
      <div class="scenic-list">
        <scenicList :tab="tab" :areaId="areaId" :value="value"></scenicList>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<<script>
import commonHeader from '../components/commonHeader'
import commonNav from '../components/commonNav'
import selectTag from '../components/common/selectTag'
import commonBottom from '../components/commonBottom'
import scenicList from '../components/scenic/scenicList'
export default {
  data() {
    return {
      navText: '景区',
      bannerList: [],
      selectTag:[{
        text:'全部景区',
        items: []
      },{
        text:'推荐排序',
        items: [
          {
            scenicName: '最新',
            areaCode: '1'
          },
          {
            scenicName: '最热',
            areaCode: '2'
          },
        ]
      }],
      tab: 0,
      areaId: '',
      value: '',
      scenicSpotAreaId: ''
    }

  },
  components: {
    commonHeader,
    commonNav,
    commonBottom,
    selectTag,
    scenicList
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal) {
        this.$http.get(this.baseUrl + '/yunchao/scenic/location/' + this.areaId).then(res => {
          if(res.data.data && res.data.data.length > 0) {
            this.selectTag[0].items = res.data.data
          }
        })
      }
    }
  },
  mounted () {
    this.$http.get(this.baseUrl + '/yunchao/scenic/rotation').then(res => {
      if(res.data && res.data.length > 0) {
        this.bannerList = res.data
      }
    })

  },
  methods: {
    searchClick: function(data) {
      this.value = data
    },
    changeAreaId: function(data) {
      this.scenicSpotAreaId = data;
    },
    changePai: function(data) {
      this.order = data;
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/scenic.scss';
</style>
