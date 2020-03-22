<template>
  <div id="foodDetail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="foodDetail-content">
      <div class="foodDetail-content-top">
        <p>
          <img src="../assets/img/location.png" />
          <span>{{ foodDetail.address }}</span>
        </p>
        <p>
          <img src="../assets/img/phone.png" />
          <span>{{ foodDetail.phone }}</span>
        </p>
      </div>
      <p class="foodDetail-content-con">{{ foodDetail.info }}</p>
      <div class="foodDetail-special-food">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">招牌菜</div>
        </div>
        <div class="foodDetail-special">
          <div v-for="(item, index) in foodDetail.special" :key="index">
            <img :src="item.url" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="foodDetail-tuijian">
        <h3>周报推荐</h3>
        <div class="shouye-tab-top">
          <span :class="{ 'choose': tabIndex === index }" v-for="(item, index) in tabList" :key="index" @click="tabClick(index)">{{ item }}</span>
        </div>
        <div class="foodDetail-tuijian-list">
          <div v-for="(item, index) in tuijian" :key="index">
            <img :src="baseUrl + item.url" />
            <p><span>{{ item.name }}</span><img class="pull-right" :src="item.flag ? require('@/assets/img/like.png') : require('@/assets/img/noLike.png')"></p>
          </div>
          <div v-if="tuijian.length % 2 != 0"></div>
        </div>
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
      bannerList: [],
      navText: '详情',
      foodDetail: {},
      tabList: ['景点', '餐饮', '乡宿'],
      tabIndex: 0,
      tuijian: []
    }
  },
  components: {
    commonSwiper,
    commonNav,
    commonBottom
  },
  mounted () {
    this.$http.get(this.baseUrl + '/yunchao/food/details/' + this.$route.query.id).then(res => {
      this.foodDetail = res.data.data;
      this.foodDetail.special = [
        {
          title: '土豆',
          url: require('@/assets/img/30.png')
        },
        {
          title: '土豆',
          url: require('@/assets/img/30.png')
        },
        {
          title: '土豆',
          url: require('@/assets/img/31.png')
        },
        {
          title: '土豆',
          url: require('@/assets/img/30.png')
        },
      ]
      this.bannerList = res.data.data.arrImgs
    })
    this.$http.get(this.baseUrl + '/yunchao/scenic/search/1/10?scenicSpotAreaId=' + this.$route.query.areaId).then(res => {
      if(res.data.data && res.data.data.length > 0) {
        res.data.data.forEach(item => {
          item.url = item.arrImgs[0]
        })
        this.tuijian = res.data.data
      }
    })
  },
  methods: {
    tabClick: function(index) {
      this.tabIndex = index;
      var url = '';
      if(index == 0) {
        url =this.baseUrl + '/yunchao/scenic/search/1/10?scenicSpotAreaId=' + this.$route.query.areaId
      }else if(index == 1) {
        url =this.baseUrl + '/yunchao/food/search/1/10?scenicSpotAreaId=' + this.$route.query.areaId
      }else if(index == 2) {
        url =this.baseUrl + '/yunchao/rural/search/1/10?scenicSpotAreaId=' + this.$route.query.areaId
      }
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(item => {
            item.url = item.arrImgs[0]
          })
          this.tuijian = res.data.data
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/foodDetail.scss';
</style>
