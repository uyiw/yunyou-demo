<template>
  <div id="xiangsu-detail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    
    <div class="xiangsu-detail-content">
        <detailNameBox :name="detailInfo.name" :likeCount="detailInfo.likeCount"></detailNameBox>
        <addressPhone :location="detailInfo.location" :phone="detailInfo.phone" :toUrl="detailInfo.toUrl"></addressPhone>
        <div class="xiangsu-detail-point-box">
            <div v-for="(item, index) in detailInfo.detail" :key="index" class="xiangsu-detail-point-item">
                <pointCard :isPadding="false" :content="item.content" :text="item.title"></pointCard>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import commonSwiper from '../components/common/commonSwiper'
import commonNav from '../components/commonNav'
import pointTitle from '../components/common/pointTitle'
import detailNameBox from '../components/common/detailNameBox'
import pointCard from '../components/common/pointCard'
import addressPhone from '../components/common/addressPhone'

export default {
  data() {
    return {
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      detailInfo:{
          name:'归心精品小院',
          likeCount:10000,
          location:'西安市 沿江大道182号【沿江大道\江汉路汉口金融中心、武汉广场、中山公园】',
          phone:13131344568,
          toUrl:'',
          detail:[{
              title:'详情介绍',
              content:'2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，'
          },{
              title:'接待能力',
              content:'2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，2006年开业，2018年装修 包含两个精品套房，'
          }]
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
    addressPhone
  }
}
</script>
<style lang="scss">
  @import '../assets/css/xiangsuDetail.scss';
</style>

