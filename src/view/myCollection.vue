<template>
  <div id="myCollection">
    <commonNav :navText="navText"></commonNav>
    <div class="collect-content">
      <div class="collect-nav-box">
        <div v-for="(item,index) in navList" :class="navId==item.id?'collect-nav active':'collect-nav'" :key="index" @click="handleChangeNav(item.id)">{{item.text}}</div>
      </div>
      <div class="collect-list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="techan-item" v-for="(item,index) in dataList" :key="index">
            <img class="techan-item-img" :src="item.img">
            <div class="techan-item-name-box">
              <div>{{item.name}}</div>
              <img src="../assets/img/heart.png" />
            </div>
          </div>
        </van-list>
      </div>
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
      navText:'我的收藏',
      navId:5,
      dataList:[],
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
      navList:[{
        id:5,
        text:'景区'
      },{
        id:2,
        text:'民宿'
      },{
        id:10,
        text:'特产'
      },{
        id:6,
        text:'游记'
      }]
    }
  },
  methods:{
    handleChangeNav:function(id){
      this.navId!=id?this.navId=id:''
      this.page = 1;
      this.getData();
    },
    getData() {
      var url = ''
      if(this.page == 1) this.dataList = []
      this.$http.get(this.baseUrl + '/yunchao/favor/search/'+ this.page +'/10?token=' + localStorage.getItem('cookie')).then(res => {
        if(res.data.data.result && res.data.data.result.length > 0) {
          res.data.data.result.forEach(item => {
            this.dataList.push(item)
          })
          this.totalNum = res.data.data.pagination.totalCount;
          if(this.totalNum <= this.dataList.length) {
            this.finished = true;
          }
        }else {
          this.dataList = []
        }
      })
    },
    onLoad() {
      this.page += 1;
      if(this.page >= 1) {
        this.getData();
      }
    },
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
  components: {
    commonNav,
    commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/myCollection.scss';
  .collect-nav-box{
    width:724px;
    height:64px;
    border-radius:6px;
    border:2px solid rgba(1,190,94,1);
    margin-top:20px;
    display:flex;
    align-items:center;
    .collect-nav{
      width:180px;
      height:60px;
      line-height:60px;
      border-left:2px solid rgba(1,190,94,1);
      text-align:center;
      font-size:28px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(85,85,85,1);

    }
    .collect-nav.active{
      background:rgba(1,190,94,1);
      color:rgba(255,255,255,1);
    }
    .collect-nav:nth-of-type(1){
      border-left:none;
    }
  }
  .collect-list{
    width:690px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin-top:30px;
    padding-bottom: 30px;
    .techan-item{
        width:330px;
        display: flex;
        flex-direction: column;
        margin-bottom: 11px;
        margin-left:30px;
        .techan-item-img{
            width:330px;
            height:330px;
        }
        .techan-item-name-box{
            width:100%;
            display: flex;
            justify-content: space-between;
            margin-top:10px;
            padding-right:10px;
            align-items: center;
            &>div{
                width:280px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                height:45px;
                font-size:32px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(11,11,11,1);
                line-height:45px;
            }
            &>img{
                width:24px;
                height:23px;
                margin-right:10px;
            }
        }
    }
    .techan-item:nth-of-type(2n+1){
        margin-left:0px;
    }
  }
</style>

