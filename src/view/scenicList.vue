<template>
  <div id="scenicList">
    <commonNav :navText="navText"></commonNav>
    <div class="scenic-content">
      <div class="xiangsu-select-box">
        <selectTag v-for="(item,index) in selectTag" :key="index" :isFirst="index==0" :items="item.items" :text="item.text"></selectTag>
      </div>
      <div class="scenic-list">
       <scenicList :tab="tab" :areaId="areaId" :value="value"></scenicList>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
import scenicList from '../components/scenic/scenicList'
import selectTag from '../components/common/selectTag'
export default {
  data() {
    return {
      tab: 0,
      navText: '景区',
      selectTag:[{
        text:'全部景区',
        items:[]
      },{
        text:'推荐排序',
        items: [
          {
            scenicName: '最新',
            areaCode: ''
          },
          {
            scenicName: '最热',
            areaCode: ''
          },
        ]
      }],
      areaId: this.$route.query.areaId,
      value: ''
    }
  },
  components: {
    commonNav,
    commonBottom,
    scenicList,
    selectTag
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/scenic/location/' + this.$route.query.areaId).then(res => {
      if(res.data.data && res.data.data.length > 0) {
        this.selectTag[0].items = res.data.data
      }
    })
  }
}
</script>
<style lang="scss">
  @import '../assets/css/scenic.scss';
</style>


