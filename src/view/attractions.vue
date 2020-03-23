<template>
  <div id="attractions">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="attractions-content ">
      <div class="attractions-content-title clearfix">
        <p class=" pull-left">{{ attractions.title }}</p>
        <div class="pull-right">
          <van-rate v-model="attractions.fenshu" />
          <span>{{ attractions.fenshu }}.0</span> 分
        </div>
      </div>
      <div class="attractions-content-intro clearfix">
        <p>介绍</p>
        <div v-html="attractions.introduction"></div>
        <router-link tag="span" to="" class="pull-right">详情<img src="../assets/img/right.png" /></router-link>
      </div>
      <div class="attractions-content-other">
        <p>地址：{{ attractions.address }}</p>
        <p>开放时间：{{ attractions.time }}</p>
        <div class="clearfix">
          <span class="pull-left">交通：</span>
          <div class="pull-left">
            <div v-if="attractions.traffic.bus">
              <p>公交</p>
              <div>{{ attractions.traffic.bus }}</div>
            </div>
            <div v-if="attractions.traffic.subway">
              <p>地铁</p>
              <div>{{ attractions.traffic.subway }}</div>
            </div>
          </div>
        </div>
        <p>门票：{{ attractions.price }} 元</p>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
import commonSwiper from '../components/common/commonSwiper'
export default {
  data() {
    return {
      navText: '详情',
      bannerList: [],
      attractions: {
        title: '花海',
        fenshu: 5.0,
        introduction: '四季花海位于北京市延庆县的四海镇，青山绿水间，数千亩鲜花铺展开来，姹紫嫣红，农田变花园。继百里山水画廊之后，延庆县又一条市级示范沟域--四季花海规模初显，8200亩鲜花陆续绽放，成为京郊景观农业的新样本。',
        address: '北京市延庆显东部四海镇',
        time: '全天',
        traffic: {
          bus: '11/18/54/36/45/45/656/64/8/54/36/45/45/656/6至大平台胡口站即可'
        },
        price: 40
      }
    }
  },
  components: {
    commonSwiper,
    commonNav,
    commonBottom
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/scenic/introduce/' + this.$route.query.id).then(res => {
      if(res.data) {
        this.attractions.title = res.data.localScenicResp.name
        this.attractions.introduction = res.data.localScenicResp.info
        this.attractions.address = res.data.localScenicResp.address
        this.attractions.time = res.data.localScenicResp.openTime
        this.bannerList = res.data.localScenicResp.arrImgs
      }
    })
  },
}
</script>
<style lang="scss">
  @import '../assets/css/attractions.scss';
</style>
