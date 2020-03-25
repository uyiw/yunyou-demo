<template>
  <div id="youji">
    <commonNav :navText="navText"></commonNav>
    <div class="youji-content">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="youji-item" v-for="(item,index) in dataList" :key="index" @click="goToDetail(item.id)">
            <div v-if="item.decodeImgs && item.decodeImgs.length > 0" class="youji-images-box">
                <img v-for="(item1,index1) in item.decodeImgs" :key="index1" :src="item1" />
                 <!-- <img :src="item.arrImgs[0]" /> -->
            </div>
            <div class="youji-title">#{{item.info.split('_')[0]}}</div>
            <div class="youji-des" v-html="item.info.split('_')[1]"></div>
        </div>
      </van-list>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonBottom from '../components/commonBottom'
import commonNav from '../components/commonNav'
export default {
  data() {
    return {
      navText:'我的游记',
      dataList:[],
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
    }
  },
  methods:{
  },
  components: {
    commonNav,
    commonBottom
  },
  beforeRouteEnter (to, from, next) {
    if(to.meta.logined) {
      if(localStorage.getItem('login') == 0) {
        window.location.href = '#/login'
      }else {
        next();
      }
    }
  },
  methods: {
    getData() {
      this.$http.get(this.baseUrl + '/yunchao/travels/search/' + this.page  + '/10?isMy=1&token=' + localStorage.getItem('cookie')).then(res => {
      if(res.data.data.result && res.data.data.result.length > 0) {
          res.data.data.result.forEach(item => {
            // item.url = item.arrImgs[0]
            // var time = item.createDateStr.split(' ')[0].split('-');
            // item.createDateStr = time[0] + '年' + time[1] + '月' + time[2] + '日'
            item.decodeImgs = item.decodeImgs.length > 3 ? item.decodeImgs.sclice(0, 2) : (item.decodeImgs.length > 1 ? item.decodeImgs : [])
            this.dataList.push(item)
          })
          this.loading = false;
          this.totalNum = res.data.data.pagination.totalCount;
          if(this.dataList.length >= this.totalNum) {
            this.finished = true;
          }
        }
      })
    },
    onLoad() {
      this.page += 1;
      if(this.page >= 1) {
        this.getData();
      }
    },
    goToDetail: function(index) {
      this.$router.push('/travelsDetail?id=' + index)
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/myYouji.scss';
  .youji-content{
      width:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 30px 30px;
      .youji-item{
          width: 100%;
          padding: 30px 0;
          border-bottom: 2px solid rgba(230,230,230,1);
          .youji-images-box{
              width:100%;
              display: flex;
              align-items:center;
              margin-bottom:34px;
              &>img{
                width: 200px;
                height: 200px;
                margin-right: 40px;
              }
              &>img:nth-of-type1(3){
                  margin-right:0px;
              }
          }
          .youji-title{
            font-size:30px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(45,45,45,1);
            line-height:42px;
            width:100%;
          }
          .youji-des{
            font-size:26px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(45,45,45,1);
            line-height:37px;
            margin-top:10px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            width: 100%;
            img {
              display: none;
            }
          }
      }
  }
</style>

