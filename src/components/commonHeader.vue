<template>
  <div :class="height ? 'common-header changeHeight' : 'common-header'">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="baseUrl + item.imgs">
      </van-swipe-item>
    </van-swipe>
    <div class="shouye-top-sea clearfix">
      <div class="pull-left shouye-address" @click="openChooseArea">
        <img src="../assets/img/address.png" />{{ city }}
        <van-popup
          v-model="showArea"
          position="bottom"
          @click.stop="closeBtn"
        >
          <van-area v-if="showArea" :area-list="areaList" :columns-num="1" @confirm="chooseArea" @cancel="cancelClick" />
        </van-popup>

      </div>
      <van-search class="pull-left" v-model="value" @search="valueSearch" @input="cancelSearch" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['bannerList', 'height', 'areaId'],
  data() {
    return {
      value: '',
      showArea: false,
      longitude:0,//经度
      latitude:0,//纬度
      city:'',
      areaList: {
        province_list: {}
      },
      close: false,
    }
  },
  watch: {
    areaId:function(newVal, oldVal) {
      if(newVal) {
        var data = {
          areaId: newVal,
          city: this.city
        }
        localStorage.setItem('area', JSON.stringify(data))
      }
    }
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
    getArea() {
      this.$http.get(this.baseUrl + '/yunchao/index/allArea').then(res => {
        if(res.data.data && res.data.data.length > 0) {
          res.data.data.forEach(item => {
            this.areaList.province_list[item.id] = item.fullName
            if(item.fullName == this.city) {
              this.$emit('update:areaId', item.id)
            }
          });
        }
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
    showErr() {
      this.getMyLocation();//定位失败再请求定位，测试使用
    },
    openChooseArea: function() {
      if(!this.showArea) this.showArea = true;
    },
    chooseArea: function(data) {
      this.city = data[0].name
      this.close = true
      this.$emit('update:areaId', data[0].code)
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
    valueSearch: function(value) {
      this.value = value;
      this.$emit('searchClick', this.value)
    },
    cancelSearch: function(value) {
      if(!value) {
        this.value = value;
        this.$emit('searchClick', this.value)
      }
    },
    clearSearch: function() {
      this.$emit('searchClick', this.value)
    }
  }
}
</script>
