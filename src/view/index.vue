<template>
  <div id="shouye">
    <commonHeader :bannerList="bannerList" :areaId.sync="areaId" @update:areaId="areaId = $event" @areaIdChange="areaIdChange"  @searchClick="searchClick"></commonHeader>
    <div class="shouye-type">
      <router-link tag="div" to="/scenic"><img src="../assets/img/jingqu.png" />景区</router-link>
      <router-link tag="div" to="/xiangsu"><img src="../assets/img/xiangsu.png" />乡宿</router-link>
      <router-link tag="div" to="/food"><img src="../assets/img/canyin.png" />餐饮</router-link>
      <router-link tag="div" to="/techan"><img src="../assets/img/techan.png" />特产</router-link>
    </div>
    <div class="shouye-new clearfix">
      <div class="pull-left">云游头条</div>
      <img src="../assets/img/laba.png" class="pull-left" />
      <div class="pull-left news-detail">{{ newsDetail.title }}</div>
      <router-link tag="p" to="/newsList" class="pull-right">更多<img src="../assets/img/next.png" /></router-link>
    </div>
    <div class="shouye-banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in bannerList1" :key="index">
          <img :src="item.imgs" @click="goToDetail(index)" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="shouye-tab">
      <div class="shouye-tab-top">
        <span :class="{ 'choose': tabIndex ===( index + 1) }" v-for="(item, index) in tabList" :key="index" @click="tabClick(index)">{{ item }}</span>
      </div>
      <div class="shouye-tab-list">
        <div class="clearfix" v-for="(item, index) in dataList" :key="index">
          <img :src="item.sImg" class="pull-left" />
          <div class="pull-left">
            <p>{{ item.scenicName }}</p>
            <p>推荐指数: <span><span>{{ item.score }}</span> 分</span></p>
            <p>有{{ item.num }}在此打卡</p>
          </div>
          <router-link class="pull-right" tag="span" :to="'/scenicDetail?id='+item.id + '&areaId=' + item.areaCode">查看<br />详情</router-link>
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        ></van-list>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonHeader from '../components/commonHeader'
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
      bannerList: [],
      newsDetail: {},
      bannerList1: [],
      loading: false,
      finished: false,
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        watchSlidesProgress: true,
        paginationClickable: true,
        // slidesPerView: 1.2,
        spaceBetween: 20,  
        initialSlide: 1,
      },
      tabList: ['必打卡', '刷地标', '一日游', '两日游'],
      tabIndex: 1,
      dataList: [],
      areaId: '',
      value: '',
      page: 0,
    }
  },
  components: {
    commonHeader,
    commonBottom
  },
  created() {
    this.$http.get(this.baseUrl + '/yunchao/index/rotation').then(res => {
      if(res.data && res.data.length > 0) {
        this.bannerList = res.data
      }
    })
    this.$http.get(this.baseUrl + '/yunchao/headlines/search/1/1').then(res => {
      this.newsDetail = res.data.data[0][0]
    })
    this.$http.get(this.baseUrl + '/yunchao/index/small_rotation').then(res => {
      if(res.data && res.data.length > 0) {
        this.bannerList1 = res.data;
      }
    })
  },
  methods: {
    tabClick: function(index) {
      this.tabIndex = index + 1;
      this.page = 1;
      this.getData();
    },
    goToDetail: function(index) {
      this.$router.push('/attractions')
    },
    searchClick: function(data) {
      this.value = data;
      this.page = 1
      this.getData();

    },
    getData() {
      var url = this.baseUrl + '/yunchao/index/scenicSpot/list/' + this.areaId + '/' + this.page + '/10?scenicName=' + this.value + '&type=' + this.tabIndex
      if(this.page <= 1) this.dataList = [];
      this.$http.get(url).then(res => {
        if(res.data.data.result && res.data.data.result.length > 0) {
          res.data.data.result.forEach(item => {
              item.num = 999
              this.dataList.push(item)
          });
          if(this.dataList.length >= res.data.data.pagination.totalCount) {
            this.finished = true;
          }
        }
      })
    },
    onLoad: function() {
      this.getData();
      this.page++;
    },
    areaIdChange: function(data) {
      this.page = 1;
      this.areaId = data
      this.getData();
    }
  }

}
</script>
<style lang="scss">
  @import '../assets/css/shouye.scss';
</style>

