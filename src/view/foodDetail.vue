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
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="foodDetail-tuijian-list">
            <div v-for="(item, index) in tuijian" :key="index">
              <img :src="item.url" />
              <p><span>{{ item.name }}</span><img class="pull-right" @click="collect(item.id, item.flag)" :src="item.flag ? require('@/assets/img/like.png') : require('@/assets/img/noLike.png')"></p>
            </div>
            <div v-if="tuijian.length % 2 != 0"></div>
          </div>
        </van-list>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import { Toast } from 'vant'
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
      tuijian: [],
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
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

  },
  methods: {
    onLoad() {
      this.page += 1;
      if(this.page >= 1) {
        this.getData();
      }
    },
    getData() {
      var url = '';
      if(this.page <= 1) this.tuijian = []
      if(this.tabIndex == 0) {
        url =this.baseUrl + '/yunchao/scenic/search/'+ this.page +'/10?scenicSpotId=' + this.$route.query.areaId + '&token=' + localStorage.getItem('cookie')
      }else if(this.tabIndex == 1) {
        url =this.baseUrl + '/yunchao/food/search/'+ this.page +'/10?scenicSpotId=' + this.$route.query.areaId + '&token=' + localStorage.getItem('cookie')
      }else if(this.tabIndex == 2) {
        url =this.baseUrl + '/yunchao/rural/search/'+ this.page +'/10?scenicSpotId=' + this.$route.query.areaId + '&token=' + localStorage.getItem('cookie')
      }
      this.$http.get(url).then(res => {
        if(res.data.data.result && res.data.data.result.length > 0) {
          res.data.data.result.forEach(item => {
            item.url = item.arrImgs ? item.arrImgs[0] : ''
            this.tuijian.push(item)
          })
          this.loading = false;
          this.totalNum = res.data.data.pagination.totalCount;
          if(this.totalNum <=  this.tuijian.length) {
            this.finished = true;
          }
        }
      })
    },
    tabClick: function(index) {
      this.tabIndex = index;
      this.page = 1;
      this.getData();
    },
    collect(id, flag) {
      var url = ''
      if(this.tabIndex == 0) {
        if(!flag) {
          url = this.baseUrl + '/yunchao/scenic/favor/add/' + id + '?token=' + localStorage.getItem('cookie')
        }else {
          url = this.baseUrl + '/yunchao/scenic/favor/cancel/' + id + '?token=' + localStorage.getItem('cookie')
        }
      }else if (this.tabIndex == 1) {
        if(!flag) {
          url = this.baseUrl + '/yunchao/food/favor/add/' + id + '?token=' + localStorage.getItem('cookie')
        }else {
          url = this.baseUrl + '/yunchao/food/favor/cancel/' + id + '?token=' + localStorage.getItem('cookie')
        }
      }else if (this.tabIndex == 2) {
        if(!flag) {
          url = this.baseUrl + '/yunchao/rural/favor/add/' + id + '?token=' + localStorage.getItem('cookie')
        }else {
          url = this.baseUrl + '/yunchao/rural/favor/cancel/' + id + '?token=' + localStorage.getItem('cookie')
        }
      }

      this.$http.post(url).then(res => {
        if(res.data.message == '用户未登录!') {
          this.$router.push('/')
        }else if (res.data.data[0] == '点赞成功') {
          this.tuijian.forEach(item => {
            if(item.id == id) {
              item.flag = 1;
            }
          })
          Toast.success(res.data.data[0])
        }else if (res.data.data[0] == '取消成功') {
          this.tuijian.forEach(item => {
            if(item.id == id) {
              item.flag = null;
            }
          })
          Toast.success(res.data.data[0])
        }else {
          Toast.fail(res.data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/foodDetail.scss';
</style>
