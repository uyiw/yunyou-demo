<template>
  <div id="xiangsu">
    <commonNav :navText="navText" :back="true"></commonNav>
    <commonHeader :bannerList="bannerList" :areaId.sync="areaId" @update:areaId="areaId = $event" @searchClick="searchClick"></commonHeader>
    <div class="xiangsu-content">
      <div class="xiangsu-select-box">
        <selectTag v-for="(item,index) in selectTag" :key="index" :isFirst="index==0" :items="item.items" :text="item.text"></selectTag>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="xiangsu-list-box">
          <hotelCard v-for="(item,index) in hotelList" :key="index" :hotelItem="item" :isEnd="index==0"></hotelCard>
        </div>
      </van-list>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonHeader from '../components/commonHeader'
import commonNav from '../components/commonNav'
import selectTag from '../components/common/selectTag'
import hotelCard from '../components/common/hotelCard'
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
      bannerList: [],
      navText:'乡宿',
      selectTag:[{
        text:'全部景区',
        items:[]
      },{
        text:'推荐排序',
        items:[
          {
            scenicName: '最新',
            areaCode: '1'
          },
          {
            scenicName: '最热',
            areaCode: '2'
          },
        ]
      }],
      hotelList:[],
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
      areaId: '',
      order: '',
      value: '',
      scenicSpotId: ''
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal) {
        this.$http.get(this.baseUrl + '/yunchao/scenic/location/' + this.areaId).then(res => {
          if(res.data.data && res.data.data.length > 0) {
            this.selectTag[0].items = res.data.data
          }
        })
        if(oldVal) {
          this.scenicSpotId = ''
          this.page = 0;
          this.getData();
        }
      }
    },
  },
  components: {
    commonHeader,
    commonNav,
    selectTag,
    hotelCard,
    commonBottom
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/rural/rotation').then(res => {
      this.bannerList = res.data
    })
    if(localStorage.getItem('area')) {
      this.areaId = JSON.parse(localStorage.getItem('area')).areaId
    }
    this.$on('changeAreaId', (data) => {
      this.scenicSpotId = data;
      this.page = 0;
      this.getData();
    })
    this.$on('changePai', (data) => {
      this.order = data;
      this.page = 0;
      this.getData();
    })
  },
  methods: {
    searchClick: function(data) {
      this.value = data
      this.page = 0;
      this.getData();
    },
    onLoad() {
      this.page += 1;
      if(this.page >= 1) {
        this.getData();
      }
    },
    getData: function() {
      if(this.page <= 1) this.hotelList = [];
      var url = ''
      if(this.scenicSpotId) {
        url = this.baseUrl + '/yunchao/rural/search/'+ this.page +'/10?scenicSpotId=' + this.scenicSpotId + '&queryStr=' + this.value + '&order=' + this.order;
      }else {
        url = this.baseUrl + '/yunchao/rural/search/'+ this.page +'/10?areaId=' + this.areaId + '&queryStr=' + this.value + '&order=' + this.order;
      }

      this.$http.get(url).then(res => {
        if(res.data.data.result && res.data.data.result.length > 0) {
          res.data.data.result.forEach(item => {
            item.imgUrl = item.arrImgs[0];
            item.dis = '距您直线距离4公里靠近江边';
            item.score = item.score ? parseFloat(item.score) : 0
            this.hotelList.push(item)
          });
          this.totalNum = res.data.data.pagination.totalCount
          this.loading = false;
          if(this.hotelList.length >= this.totalNum) {
            this.finished = true;
          }
        }
      })
    }
  },
}
</script>
<style lang="scss">
  @import '../assets/css/xiangsu.scss';
</style>

