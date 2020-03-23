<template>
  <div class="scenicList">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(item, index) in scenicList" class="scenicItem" :key="index" @click="goToDetail(item.id, item.area)">
        <img :src="baseUrl + item.imgs" />
        <h3>{{ item.name }}</h3>
        <p><img src="../../assets/img/16.png" /> {{ item.address }}</p>
        <div class="scenicList-con">{{ item.info }}</div>
      </div>
    </van-list>
  </div>
</template>
<script>
export default {
  props: ['tab', 'areaId', 'value'],
  data() {
    return {
      scenicList: [],
      scenicSpotAreaId: '',
      order: '',
      loading: false,
      finished: false,
      page: 1,
      totalNum: 10
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal) {
        this.scenicSpotAreaId = ''
        this.page = 1;
        this.getData();
      }
    },
    value: function(newVal, oldVal) {
      this.page = 1;
      this.getData();
    },
  },
  mounted () {
    this.$parent.$on('changeAreaId', (data) => {
      this.page = 1;
      this.getData();
    })
    this.$parent.$on('changePai', (data) => {
      this.page = 1;
      this.order = data;
      this.getData();
    })
    if(this.$route.query.areaId) {
      this.getData();
    }
  },
  methods: {
    goToDetail: function(index, area) {
      this.$router.push('/attractions?id=' + index + '&areaId=' + area)
    },
    getData() {
      if(this.page <= 1)this.scenicList = [];
      var url = '';
      if(this.scenicSpotAreaId) {
        url = this.baseUrl + '/yunchao/scenic/search/'+ this.page + '/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&queryStr=' + this.value + '&order=' + this.order;
      }else {
        url = this.baseUrl + '/yunchao/scenic/search/'+ this.page + '/10?areaId=' + this.areaId + '&queryStr=' + this.value + '&order=' + this.order;
      }
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {

          this.scenicList.concat(res.data.data)
          this.loading = false;
        }
        if(this.totalNum <= res.data.data.length) {
          this.finished = true;
        }
      })
    },
    onLoad() {
      this.page += 1;
      this.getData();
    }
  }
}
</script>

