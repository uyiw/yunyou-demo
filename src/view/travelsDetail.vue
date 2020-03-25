<template>
  <div id="travelsDetail">
    <commonNav :navText="navText"></commonNav>
    <img :src="travelsDetail.topUrl ? travelsDetail.topUrl : ''"  />
    <div class="travelsDetail-content">
      <h2>{{ travelsDetail.info ? travelsDetail.info.split('_')[0] : '' }}</h2>
      <div class="travelsDetail-con-top">
        <img :src="travelsDetail.jqCustomer.img" />
        <span>{{ travelsDetail.jqCustomer.nickname }}</span>
      </div>
      <div class="travelsDetail-con-intro">
        <div>
          <img src="../assets/img/45.png" />
          <p>{{ travelsDetail.createDateStr ? travelsDetail.createDateStr.split(' ')[0].split('-').join('.') : '-' }}</p>
          <p>出游日期</p>
        </div>
        <div>
          <img src="../assets/img/42.png" />
          <p>{{ travelsDetail.playDay ? travelsDetail.playDay : 0 }}</p>
          <p>出行天数</p>
        </div>
        <div>
          <img src="../assets/img/43.png" />
          <p>{{ travelsDetail.playPeople ? travelsDetail.playPeople : 0 }}</p>
          <p>出行人数</p>
        </div>
        <div>
          <img src="../assets/img/44.png" />
          <p>￥{{ travelsDetail.price ? travelsDetail.price : 0 }}</p>
          <p>人均消费</p>
        </div>
      </div>
      <div class="travelsDetail-con-con" v-html="travelsDetail.info ? travelsDetail.info.split('_')[1] : ''"></div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
import utils from '../assets/js/utils'
export default {
  data() {
    return {
      navText: '详情',
      travelsDetail: {
        jqCustomer: {}
      }
    }
  },
  components: {
    commonNav,
    commonBottom
  },
  mounted() {
    this.travelsDetail.content = utils.pxToRem(this.travelsDetail.content);
    this.$http.get(this.baseUrl + '/yunchao/travels/details/' + this.$route.query.id).then(res => {
      this.travelsDetail = res.data.jqTravelsResp
      this.travelsDetail.topUrl = res.data.jqTravelsResp.arrImgs[0]
    })
  }
}
</script>
<style lang="scss">
  @import '../assets/css/travelsDetail.scss';
</style>

