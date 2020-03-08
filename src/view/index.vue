<template>
  <div id="shouye">
    <commonHeader :bannerList="bannerList"></commonHeader>
    <div class="shouye-type">
      <router-link tag="div" to=""><img src="../assets/img/jingqu.png" />景区</router-link>
      <router-link tag="div" to=""><img src="../assets/img/xiangsu.png" />乡宿</router-link>
      <router-link tag="div" to=""><img src="../assets/img/canyin.png" />餐饮</router-link>
      <router-link tag="div" to=""><img src="../assets/img/techan.png" />特产</router-link>
    </div>
    <div class="shouye-new clearfix">
      <div class="pull-left">云游头条</div>
      <img src="../assets/img/laba.png" class="pull-left" />
      <div class="pull-left news-detail">{{ newsDetail }}</div>
      <p class="pull-right">更多<img src="../assets/img/next.png" /></p>
    </div>
    <div class="shouye-banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in bannerList1" :key="index">
          <img :src="item" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="shouye-tab">
      <div class="shouye-tab-top">
        <span :class="{ 'choose': tabIndex === index }" v-for="(item, index) in tabList" :key="index" @click="tabClick(index)">{{ item }}</span>
      </div>
      <div class="shouye-tab-list">
        <div class="clearfix" v-for="(item, index) in dataList" :key="index">
          <img :src="item.img" class="pull-left" />
          <div class="pull-left">
            <p>{{ item.title }}</p>
            <p>推荐指数: <span><span>{{ item.score }}</span> 分</span></p>
            <p>有{{ item.num }}在此打卡</p>
          </div>
          <router-link class="pull-right" tag="span" to="">查看<br />详情</router-link>
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
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      newsDetail: '武清水雪嘉年华！',
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
      dataList: [
        {
          img: require('@/assets/img/4.png'),
          title: '朱仙镇',
          score: '5.0',
          num: '999+'
        },
        {
          img: require('@/assets/img/5.png'),
          title: '朱仙镇',
          score: '5.0',
          num: '999+'
        },
      ]
    }
  },
  components: {
    commonHeader,
    commonBottom
  },
  created() {
  },
  methods: {
    tabClick: function(index) {
      this.tabIndex = index
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/shouye.scss';
</style>

