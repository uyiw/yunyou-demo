<template>
  <div id="techan">
    <commonNav :navText="navText" ></commonNav>
    <commonHeader :bannerList="bannerList" :areaId.sync="areaId" @update:areaId="areaId = $event" @searchClick="searchClick"></commonHeader>
    <div class="techan-content">
      <div class="techan-select-box">
        <div v-for="(item,index) in selectTag" :key="index" :class="item.id == activeId?'active':''" @click="handleChangeTab(item.id)">{{item.text}}</div>
      </div>
      <div class="techan-list-box">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="techan-item" v-for="(item,index) in techanList" :key="index" @click="goToDetail(item.id)">
            <img class="techan-item-img" :src="item.imageUrls">
            <div class="techan-item-name-box">
              <div>{{item.name}}</div>
              <img @click.stop="collect(item.id, item.flag)" :src="item.flag ? require('@/assets/img/like.png') : require('@/assets/img/noLike.png')" />
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import { Toast } from 'vant'
import commonHeader from '../components/commonHeader'
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
      bannerList: [],
      activeId:1,
      areaId: '',
      navText:'特产',
      value: '',
      selectTag:[{
        text:'热门',
        id: 1,
      },{
        text:'土特产',
        id: 2,
      },{
        text:'纪念品',
        id: 3,
      },{
        text:'工艺品',
        id: 4,
      }],
      techanList:[],
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal && oldVal) {
        this.page = 1;
        this.getData();
      }
    }
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/specialty/rotation').then(res => {
      if(res.data && res.data.length > 0) {
        this.bannerList = res.data
      }
    })
  },
  methods:{
    handleChangeTab:function(id){
       id != this.activeId ? this.activeId = id : '';
       this.page = 1;
       this.getData();
    },
    getData: function() {
      if(this.page <= 1) this.techanList = []
      this.$http.get(this.baseUrl + '/yunchao/specialty/search/'+ this.page +'/10?areaId='+ this.areaId +'&type=' + this.activeId + '&queryStr=' + this.value + '&token=' + localStorage.getItem('cookie')).then(res => {
        if(res.data.data[0] && res.data.data[0].length > 0) {
          res.data.data[0].forEach(item => {
            this.techanList.push(item)
          })
          this.totalNum = res.data.data[1]
          if(this.totalNum <= this.techanList.length) {
            this.finished = true;
          }
        }else {
          this.techanList = []
        }
      })
    },
    searchClick: function(data) {
      this.value = data
      this.page = 1;
      this.getData();
    },
    goToDetail: function(index) {
      this.$router.push('/techanDetail?id=' + index)
    },
    onLoad() {
      this.page += 1;
      if(this.page >= 1) {
        this.getData();
      }
    },
    collect(id, flag) {
      var url = ''
      if(!flag) {
        url = this.baseUrl + '/yunchao/specialty/favor/add/' + id + '?token=' + localStorage.getItem('cookie')
      }else {
        url = this.baseUrl + '/yunchao/specialty/favor/cancel/' + id + '?token=' + localStorage.getItem('cookie')
      }
      this.$http.post(url).then(res => {
        if(res.data.message == '用户未登录!') {
          this.$router.push('/')
        }else if (res.data.data[0] == '点赞成功') {
          this.techanList.forEach(item => {
            if(item.id == id) {
              item.flag = 1;
            }
          })
          Toast.success(res.data.data[0])
        }else if (res.data.data[0] == '取消成功') {
          this.techanList.forEach(item => {
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
  },
  components: {
    commonHeader,
    commonNav,
    commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/techan.scss';
</style>

