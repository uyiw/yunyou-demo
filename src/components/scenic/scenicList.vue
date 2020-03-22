<template>
  <div class="scenicList">
    <div v-for="(item, index) in scenicList" :key="index" @click="goToDetail(item.id, item.area)">
      <img :src="baseUrl + item.imgs" />
      <h3>{{ item.name }}</h3>
      <p><img src="../../assets/img/16.png" /> {{ item.address }}</p>
      <div class="scenicList-con">{{ item.info }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tab', 'areaId', 'value'],
  data() {
    return {
      scenicList: [],
      scenicSpotAreaId: '',
      order: ''
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal) {
        this.scenicList = [];
        this.scenicSpotAreaId = ''
        var url = '/yunchao/scenic/search/1/10?areaId=' + newVal + '&queryStr=' + this.value  + '&order=' + this.order;
        this.$http.get(this.baseUrl + url).then(res => {
          if(res.data.data && res.data.data.length > 0) {
            this.scenicList = res.data.data
          }
        })
      }
    },
    value: function(newVal, oldVal) {
      this.scenicList = [];
      var url = this.scenicSpotAreaId ? this.baseUrl + '/yunchao/scenic/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&queryStr=' + newVal  + '&order=' + this.order : this.baseUrl + '/yunchao/scenic/search/1/10?areaId=' + this.areaId + '&queryStr=' + newVal  + '&order=' + this.order;
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.scenicList = res.data.data
        }
      })
    },
  },
  mounted () {
    this.$parent.$on('changeAreaId', (data) => {
      this.scenicSpotAreaId = data;
      this.scenicList = [];
      var url = this.baseUrl + '/yunchao/scenic/search/1/10?scenicSpotAreaId=' + data + '&queryStr=' + this.value + '&order=' + this.order;
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.scenicList = res.data.data
        }
      })
    })
    this.$parent.$on('changePai', (data) => {
      this.order = data;
      this.scenicList = [];
      var url = ''
      if(this.scenicSpotAreaId) {
        url = this.baseUrl + '/yunchao/scenic/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&queryStr=' + this.value + '&order=' + data;
      }else {
        url = this.baseUrl + '/yunchao/scenic/search/1/10?scenicSpotAreaId=' + this.areaId + '&queryStr=' + this.value + '&order=' + data;
      }

      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.scenicList = res.data.data
        }
      })
    })
    if(this.$route.query.areaId) {
      this.scenicList = [];
      var url = this.baseUrl + '/yunchao/scenic/search/1/10?areaId=' + this.$route.query.areaId;
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.scenicList = res.data.data
        }
      })
    }
  },
  methods: {
    goToDetail: function(index, area) {
      this.$router.push('/attractions?id=' + index + '&areaId=' + area)
    }
  }
}
</script>

