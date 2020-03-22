<template>
  <div id="xiangsu">
    <commonNav :navText="navText" :back="true"></commonNav>
    <commonHeader :bannerList="bannerList" :areaId.sync="areaId" @update:areaId="areaId = $event" @searchClick="searchClick"></commonHeader>
    <div class="xiangsu-content">
      <div class="xiangsu-select-box">
        <selectTag v-for="(item,index) in selectTag" :key="index" :isFirst="index==0" :items="item.items" :text="item.text"></selectTag>
      </div>
      <div class="xiangsu-list-box">
        <hotelCard v-for="(item,index) in hotelList" :key="index" :hotelItem="item" :isEnd="index==0"></hotelCard>
      </div>
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
      areaId: '',
      order: '',
      value: '',
      scenicSpotAreaId: ''
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
        this.hotelList = [];
        this.scenicSpotAreaId = ''
        var url = this.value ? '/yunchao/food/search/1/10?areaId=' + newVal + '&queryStr=' + this.value + '&order=' + this.order : '/yunchao/food/search/1/10?areaId=' + newVal + '&order=' + this.order;
        this.$http.get(this.baseUrl + url).then(res => {
          if(res.data.data && res.data.data.length > 0) {
            res.data.data.forEach(element => {
              element.imgUrl = element.arrImgs[0]
            });
            res.data.data.forEach(item => {
              item.star = 5
              item.dis = '距您直线距离4公里靠近江边'
            })
            this.hotelList = res.data.data
          }
        })
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
      this.scenicSpotAreaId = data;
      this.hotelList = [];
      var url = this.baseUrl + '/yunchao/rural/search/1/10?scenicSpotAreaId=' + data + '&queryStr=' + this.value + '&order=' + this.order;
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(element => {
            element.imgUrl = element.arrImgs[0]
          });
          res.data.data.forEach(item => {
            item.star = 5
            item.dis = '距您直线距离4公里靠近江边'
          })
          this.hotelList = res.data.data
        }
      })
    })
    this.$on('changePai', (data) => {
      this.order = data;
      this.hotelList = [];
      var url = ''
      if(this.scenicSpotAreaId) {
        url = this.baseUrl + '/yunchao/rural/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&queryStr=' + this.value + '&order=' + data;
      }else {
        url = this.baseUrl + '/yunchao/rural/search/1/10?scenicSpotAreaId=' + this.areaId + '&queryStr=' + this.value + '&order=' + data;
      }

      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(element => {
            element.imgUrl = element.arrImgs[0]
          });
          res.data.data.forEach(item => {
            item.star = 5
            item.dis = '距您直线距离4公里靠近江边'
          })
          this.hotelList = res.data.data
        }
      })
    })
  },
  methods: {
    searchClick: function(data) {
      this.value = data
      this.hotelList = [];
      var url = this.scenicSpotAreaId ?
      (this.value ? this.baseUrl + '/yunchao/rural/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&queryStr=' + this.value + '&order=' + this.order : this.baseUrl + '/yunchao/food/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&order=' + this.order) :
      (this.value ? this.baseUrl + '/yunchao/rural/search/1/10?areaId=' + this.areaId + '&queryStr=' + this.value + '&order=' + this.order : this.baseUrl + '/yunchao/scenic/search/1/10?areaId=' + this.areaId + '&order=' + this.order);
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(element => {
            element.imgUrl = element.arrImgs[0]
          });
          res.data.data.forEach(item => {
            item.star = 5
            item.dis = '距您直线距离4公里靠近江边'
          })
          this.hotelList = res.data.data
        }
      })
    },
  },
}
</script>
<style lang="scss">
  @import '../assets/css/xiangsu.scss';
</style>

