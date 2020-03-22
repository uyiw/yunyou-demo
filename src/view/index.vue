<template>
  <div id="shouye">
    <commonHeader :bannerList="bannerList" :areaId.sync="areaId" @update:areaId="areaId = $event" @searchClick="searchClick"></commonHeader>
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
        <swiper-slide v-for="(item, index) in bannerList" :key="index">
          <img :src="item" @click="goToDetail(index)" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="shouye-tab">
      <div class="shouye-tab-top">
        <span :class="{ 'choose': tabIndex === index }" v-for="(item, index) in tabList" :key="index" @click="tabClick(index)">{{ item }}</span>
      </div>
      <div class="shouye-tab-list">
        <div class="clearfix" v-for="(item, index) in dataList" :key="index">
          <img :src="baseUrl + item.imgs" class="pull-left" />
          <div class="pull-left">
            <p>{{ item.name }}</p>
            <p>推荐指数: <span><span>{{ item.score }}</span> 分</span></p>
            <p>有{{ item.num }}在此打卡</p>
          </div>
          <router-link class="pull-right" tag="span" :to="'/scenicDetail?id='+item.id">查看<br />详情</router-link>
        </div>
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
      bannerList1: [require('@/assets/img/3.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/3.png')
      ],
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
      tabIndex: 0,
      dataList: [],
      areaId: ''
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal) {
        this.$http.get(this.baseUrl + '/yunchao/scenic/search/1/10?areaId=' + this.areaId).then(res => {
          if(res.data.data && res.data.data.length > 0) {
            res.data.data.forEach(item => {
                item.score = 5;
                item.num = 999
            });
            this.dataList = res.data.data
          }
        })
      }
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
      this.newsDetail = res.data.data[0]
    })

  },
  methods: {
    tabClick: function(index) {
      this.tabIndex = index
    },
    goToDetail: function(index) {
      this.$router.push('/attractions')
    },
    searchClick: function(data) {
      var url = data ? this.baseUrl + '/yunchao/scenic/search/1/10?areaId=' + this.areaId + '&queryStr=' + data : this.baseUrl + '/yunchao/scenic/search/1/10?areaId=' + this.areaId
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(item => {
              item.score = 5;
              item.num = 999
          });
          this.dataList = res.data.data
        }
      })
    }
  }

}
</script>
<style lang="scss">
  @import '../assets/css/shouye.scss';
</style>

