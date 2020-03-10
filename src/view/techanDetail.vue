<template>
  <div id="techan-detail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    
    <div class="techan-detail-content">
        <detailNameBox :name="detailInfo.name"></detailNameBox>
        <pointTitle text="推荐购买地址"></pointTitle>
        <addressPhone :location="detailInfo.location" :phone="detailInfo.phone" :toUrl="detailInfo.toUrl"></addressPhone>
        <div class="techan-detail-point-box">
            <pointCard :content="detailInfo.detail.content" :text="detailInfo.detail.title"></pointCard>
        </div>
    </div>
    <buy></buy>
  </div>
</template>
<script>
import commonSwiper from '../components/common/commonSwiper'
import commonNav from '../components/commonNav'
import pointTitle from '../components/common/pointTitle'
import detailNameBox from '../components/common/detailNameBox'
import pointCard from '../components/common/pointCard'
import addressPhone from '../components/common/addressPhone'
import buy from '../components/common/buy'
export default {
  data() {
    return {
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      detailInfo:{
          name:'精品银鱼干',
          location:'西安市 沿江大道182号【沿江大道\江汉路汉口金融中心、武汉广场、中山公园】',
          phone:13131344568,
          toUrl:'',
          detail:{
              title:'详情介绍',
              content:'2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，'
          }
      },
      navText:'详情'
    }
  },
  components: {
    commonSwiper,
    commonNav,
    pointTitle,
    detailNameBox,
    pointCard,
    addressPhone,
    buy
  }
}
</script>
<style lang="scss">
  @import '../assets/css/techanDetail.scss';
</style>

