<template>
  <div id="travels">
    <commonNav :navText="navText" :back="true"></commonNav>
    <div class="travels-top clearfix">
      <p class="pull-left" @click="openChooseArea"><img src="../assets/img/40.png" /><span>{{ city }}</span></p>
      <van-popup
        v-model="showArea"
        position="bottom"
        @click.stop="closeBtn"
      >
        <van-area v-if="showArea" :area-list="areaList" :columns-num="1" @confirm="chooseArea" @cancel="cancelClick" />
      </van-popup>
      <van-search class="pull-left" v-model="value" placeholder="酒店/目的地/餐饮/关键词"  @search="valueSearch" @input="cancelSearch"  />
    </div>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="travels-tab">
      <span :class="{'choose': item.id === tabIndex}" @click="tabClick(item.id)" v-for="(item, index) in tabList" :key="index">{{ item.name }}</span>
    </div>
    <div class="travels-list">
      <div class="travels-list-con" v-for="(item, index) in travelsList" :key="index" @click="goToDetail(item.id)">
        <div class="travels-list-con-top clearfix">
          <img :src="item.jqCustomer ? item.jqCustomer.img : ''" class="pull-left" />
          <div class="pull-left">
            <p>{{ item.jqCustomer ? item.jqCustomer.nickname : '' }}</p>
            <p>{{ item.createDateStr }}出游</p>
          </div>
          <div @click.stop="goToEdit" class="pull-right addNew">新增<van-icon name="plus" /></div>
        </div>
        <img :src="baseUrl + item.url" />
        <p>{{ item.info }}</p>
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
      city: '西安',
      showArea: false,
      longitude:0,//经度
      latitude:0,//纬度
      areaId: '',
      areaList: {
        province_list: {}
      },
      isMy: 0,
      tabList: [
        {
          name: '全部',
          id: 3,
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
          id: 'isMy',
        },
      ],
      tabIndex: 3,
      travelsList: []
    }
  },
  components: {
    commonSwiper,
    commonNav,
    commonBottom
  },
  mounted() {
    if(!qq) {
      location.reload();
    } else {
      if(localStorage.getItem('area')) {
        this.$emit('update:areaId', JSON.parse(localStorage.getItem('area')).areaId)
        this.city = JSON.parse(localStorage.getItem('area')).city
        this.getArea();
      }else {
        this.getMyLocation();
      }
    }
  },
  methods: {
    getData: function() {
      var url = '';
      this.travelsList = [];
      if(this.tabIndex == 'isMy') {
        url = this.baseUrl + '/yunchao/travels/search/1/10?areaId=' + this.areaId + '&isMy=1&queryStr=' + this.value
      }else {
        url = this.baseUrl + '/yunchao/travels/search/1/10?areaId=' + this.areaId  + '&order=' + this.tabIndex + '&queryStr=' + this.value
      }
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(item => {
            item.url = item.arrImgs[0]
          })
          this.travelsList = res.data.data
        }
      })
    },
    tabClick: function(id) {
      this.tabIndex = id;
      this.getData();
    },
    goToDetail: function(index) {
      this.$router.push('/travelsDetail?id=' + index)
    },
    goToEdit: function() {
      this.$router.push('/travelsEdit')
    },
    openChooseArea: function() {
      if(!this.showArea) this.showArea = true;
    },
    chooseArea: function(data) {
      this.city = data[0].name
      this.close = true
      this.areaId = data[0].code;
      this.getData();
      var data = {
        areaId: data[0].code,
        city: data[0].name
      }
      localStorage.setItem('area', JSON.stringify(data))
    },
    closeBtn: function() {
      if(this.close) {
        this.showArea = false;
        this.close = false;
      }
    },
    cancelClick: function() {
      this.close = true
    },
    getArea() {
      this.$http.get(this.baseUrl + '/yunchao/index/allArea').then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(item => {
            this.areaList.province_list[item.id] = item.fullName
            if(item.fullName == this.city) {
              this.areaId = item.id;
            }
          });
        }
        this.getData();
      })
    },
    getMyLocation() {
      var geolocation = new qq.maps.Geolocation("YTYBZ-576CS-TIVOF-6ONG7-KIRLE-V3FFF", "yunyou");
      geolocation.getIpLocation(this.showPosition, this.showErr);
    },
    showPosition(position) {
      this.latitude = position.lat;
      this.longitude = position.lng;
      this.city = position.province;
      this.getArea();
    },
    valueSearch: function(value) {
      this.value = value;
      this.getData();
    },
    cancelSearch: function(value) {
      if(!value) {
        this.value = value;
        this.getData();
      }
    },
  }
}
</script>
<style lang="scss">
  @import '../assets/css/travels.scss';
</style>

