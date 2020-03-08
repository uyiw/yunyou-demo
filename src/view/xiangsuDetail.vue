<template>
  <div id="xiangsu-detail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="xiangsu-detail-content">
        <detailNameBox :name="detailInfo.name" :likeCount="detailInfo.likeCount"></detailNameBox>
        
        <pointTitle></pointTitle>
    </div>
  </div>
</template>
<script>
import commonSwiper from '../components/commonSwiper'
import commonNav from '../components/commonNav'
import pointTitle from '../components/pointTitle'
import detailNameBox from '../components/detailNameBox'
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
      },
      navText:'详情'
    }
  },
  components: {
    commonSwiper,
    commonNav,
    pointTitle,
    detailNameBox
  }
}
</script>
<style lang="scss">
  @import '../assets/css/xiangsuDetail.scss';
</style>

