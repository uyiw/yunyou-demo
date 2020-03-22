<template>
  <div id="techan-detail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="techan-detail-content">
        <detailNameBox :name="detailInfo.name"></detailNameBox>
        <pointTitle text="推荐购买地址"></pointTitle>
        <addressPhone :location="detailInfo.address" :phone="detailInfo.phone" :toUrl="detailInfo.toUrl"></addressPhone>
        <div class="techan-detail-point-box">
            <pointCard :content="detailInfo.detail.content" :text="detailInfo.detail.title"></pointCard>
        </div>
    </div>
    <buy :show="show" :flag="flag"></buy>
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
      bannerList: [],
      show: false,
      detailInfo:{
        detail: {}
      },
      navText:'详情',
      flag: ''
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
  },
  mounted () {
    this.$http.get(this.baseUrl + '/yunchao/specialty/details/' + this.$route.query.id).then(res => {
      this.bannerList = res.data.localSpecialty.arrImgs;
      this.detailInfo = res.data.localSpecialty;
      this.detailInfo.detail = {
        title:'详情介绍',
        content: res.data.localSpecialty.info
      }
      this.flag = res.data.specialLocalProduct.flag
    })
  }
}
</script>
<style lang="scss">
  @import '../assets/css/techanDetail.scss';
</style>

