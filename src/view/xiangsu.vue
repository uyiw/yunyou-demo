<template>
  <div id="xiangsu">
    <commonNav :navText="navText"></commonNav>
    <commonHeader :bannerList="bannerList"></commonHeader>
    <div class="xiangsu-content">
      <div class="xiangsu-select-box">
        <selectTag v-for="(item,index) in selectTag" :key="index" :isFirst="index==0" :items="item.items" :text="item.text"></selectTag>
      </div>
      <div class="xiangsu-list-box">
        <hotelCard v-for="(item,index) in hotelList" :key="index" :hotelItem="item" :isEnd="index==0"></hotelCard>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonHeader from '../components/commonHeader'
import commonNav from '../components/commonNav'
import selectTag from '../components/common/selectTag'
import hotelCard from '../components/common/hotelCard'
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      navText:'乡宿',
      selectTag:[{
        text:'全部景区',
        items:[]
      },{
        text:'推荐排序',
        items:[]
      }],
      hotelList:[{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        star:5,
        dis:'距您直线距离4公里靠近江边'
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        star:5,
        dis:'距您直线距离4公里靠近江边'
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        star:5,
        dis:'距您直线距离4公里靠近江边'
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        star:5,
        dis:'距您直线距离4公里靠近江边'
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        star:5,
        dis:'距您直线距离4公里靠近江边'
      }]
    }
  },
  components: {
    commonHeader,
    commonNav,
    selectTag,
    hotelCard,
    commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/xiangsu.scss';
</style>

