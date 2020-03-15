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
      <p class="foodDetail-content-con">{{ foodDetail.content }}</p>
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
          <div v-for="(item, index) in foodDetail.tuijianList" :key="index">
            <img :src="item.url" />
            <p><span>{{ item.title }}</span><img class="pull-right" :src="item.like ? require('@/assets/img/like.png') : require('@/assets/img/noLike.png')"></p>
          </div>
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
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      navText: '详情',
      foodDetail: {
        address: '自朝乡月坝村4号',
        phone: '15689456899',
        content: '月坝单振芳采用当地优质材质，专业厨师精心烹饪，在这里可以品尝到正宗的四川农家美食',
        special: [
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
        ],
        tuijianList: [
          {
            url: require('@/assets/img/32.png'),
            title: '九寨沟',
            like: 0
          },
          {
            url: require('@/assets/img/31.png'),
            title: '奥地利',
            like: 1
          },
          {
            url: require('@/assets/img/31.png'),
            title: '奥地利',
            like: 0
          },
          {
            url: require('@/assets/img/32.png'),
            title: '九寨沟',
            like: 2
          },
        ]
      },
      tabList: ['景点', '餐饮', '乡宿'],
      tabIndex: 0,
    }
  },
  components: {
    commonSwiper,
    commonNav,
    commonBottom
  },
  methods: {
    tabClick: function(index) {
      this.tabIndex = index
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/foodDetail.scss';
</style>
