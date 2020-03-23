<template>
  <div class="scenicDetail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="scenicDetail-context">
      <h3>{{ scenicDetail.scenicName }}</h3>
      <p><img src="../assets/img/35.png" /> {{ scenicDetail.address }}</p>
      <div class="scenicDetail-context-con" v-html="scenicDetail.details"></div>
      <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">区域内景点</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenic" :key="index">
            <img :src="item.url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <router-link tag="p" :to="'/scenicList?id=' + $route.query.id + '&areaId=' + scenicDetail.province">查看全部</router-link>
      </div>
      <!-- <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">区域内餐饮</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenicDetail.scenic" :key="index">
            <img :src="url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>查看全部</p>
      </div>
      <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">区域内乡宿</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenicDetail.scenic" :key="index">
            <img :src="url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>查看全部</p>
      </div>
      <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">土特产</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenicDetail.scenic" :key="index">
            <img :src="url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>查看全部</p>
      </div> -->
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
      scenicDetail: {},
      scenic: []
   }
  },
  components: {
    commonSwiper,
    commonNav,
    commonBottom
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/index/scenicSpot/details/' + this.$route.query.id).then(res => {
      res.data.data.imgs = res.data.data.imgs.split(',');
      this.scenicDetail = res.data.data
      this.bannerList = res.data.data.imgs;
    })
    this.$http.get(this.baseUrl + '/yunchao/scenic/search/1/4?scenicSpotId=' + this.$route.query.id).then(res => {
      res.data.data.result.forEach(element => {
        this.scenic.push({
          name: element.name,
          url: element.arrImgs[0]
        })
      });
    })
  }

}
</script>

<style lang="scss">
  @import '../assets/css/scenicDetail.scss';
</style>
