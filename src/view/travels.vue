<template>
  <div id="travels">
    <commonNav :navText="navText" :back="true"></commonNav>
    <div class="travels-top clearfix">
      <p class="pull-left"><img src="../assets/img/40.png" /><span>{{ address }}</span></p>
      <van-search class="pull-left" v-model="value" placeholder="酒店/目的地/餐饮/关键词" />
    </div>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="travels-tab">
      <span :class="{'choose': item.id === tabIndex}" @click="tabClick(item.id)" v-for="(item, index) in tabList" :key="index">{{ item.name }}</span>
    </div>
    <div class="travels-list">
      <div class="travels-list-con" v-for="(item, index) in travelsList" :key="index" @click="goToDetail(index)">
        <div class="travels-list-con-top clearfix">
          <img :src="item.headUrl" class="pull-left" />
          <div class="pull-left">
            <p>{{ item.name }}</p>
            <p>{{ item.time }}出游</p>
          </div>
          <div class="pull-right addNew">新增<van-icon name="plus" /></div>
        </div>
        <img :src="item.url" />
        <p>{{ item.content }}</p>
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
      navText: '游记',
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      value: '',
      address: '西安',
      tabList: [
        {
          name: '全部',
          id: 0,
        },
        {
          name: '最新',
          id: 1,
        },
        {
          name: '精华',
          id: 2,
        },
        {
          name: '我的',
          id: 3,
        },
      ],
      tabIndex: 0,
      travelsList: [
        {
          headUrl: require('@/assets/img/head.jpg'),
          name: '帅到没朋友',
          time: '2019年6月19日',
          content: '周末闲暇时，不如到昆明走一趟，过慢走浅右的生活。',
          url: require('@/assets/img/20.png'),
        },
        {
          headUrl: require('@/assets/img/head.jpg'),
          name: '帅到没朋友',
          time: '2019年6月19日',
          content: '周末闲暇时，不如到昆明走一趟，过慢走浅右的生活。',
          url: require('@/assets/img/20.png'),
        },
      ]
    }
  },
  components: {
    commonSwiper,
    commonNav,
    commonBottom
  },
  methods: {
    tabClick: function(id) {
      this.tabIndex = id;
    },
    goToDetail: function(index) {
      this.$router.push('/travelsDetail')
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/travels.scss';
</style>

