<template>
  <div id="xiangsu-detail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="xiangsu-detail-content">
        <detailNameBox :name="detailInfo.name" :likeCount="detailInfo.likeNum"></detailNameBox>
        <addressPhone :location="detailInfo.address" :phone="detailInfo.phone" :toUrl="detailInfo.toUrl"></addressPhone>
        <div class="xiangsu-detail-point-box">
            <div v-for="(item, index) in detailInfo.detail" :key="index" class="xiangsu-detail-point-item">
                <pointCard :isPadding="false" :content="item.content" :text="item.title"></pointCard>
            </div>
        </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonSwiper from '../components/common/commonSwiper'
import commonNav from '../components/commonNav'
import pointTitle from '../components/common/pointTitle'
import detailNameBox from '../components/common/detailNameBox'
import pointCard from '../components/common/pointCard'
import addressPhone from '../components/common/addressPhone'
import commonBottom from '../components/commonBottom'

export default {
  data() {
    return {
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      detailInfo:{},
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
    commonBottom
  },
  mounted () {
    this.$http.get(this.baseUrl + '/yunchao/rural/details/' + this.$route.query.id).then(res => {
      this.detailInfo = res.data
      this.bannerList = res.data.arrImgs;
      this.detailInfo.address = res.data.jqArea.fullName
      this.detailInfo.detail = [{
          title:'详情介绍',
          content: res.data.info ? res.data.info : '无'
      },{
          title:'接待能力',
          content:res.data.reception ? res.data.reception : '无'
      }]
    })
  }
}
</script>
<style lang="scss">
  @import '../assets/css/xiangsuDetail.scss';
</style>

