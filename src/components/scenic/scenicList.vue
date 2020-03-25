<template>
  <div class="scenicList">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(item, index) in scenicList" class="scenicItem" :key="index" @click="goToDetail(item.id, item.area)">
        <img :src="item.imgs" />
        <h3>{{ item.name }}</h3>
        <p><img src="../../assets/img/16.png" /> {{ item.address }}</p>
        <div class="scenicList-con">{{ item.info.split('_')[1] }}</div>
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
      order: '',
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
      scenicSpotId: this.$route.query.id,
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal && oldVal) {
        this.scenicSpotAreaId = ''
        this.page = 0;
        this.getData();
      }
    },
    value: function(newVal, oldVal) {
      this.page = 0;
      this.getData();
    },
  },
  mounted () {
    this.$parent.$on('changeAreaId', (data) => {
      this.page = 0;
      this.scenicSpotId = data
      this.getData();
    })
    this.$parent.$on('changePai', (data) => {
      this.page = 0;
      this.order = data;
      this.getData();
    })
  },
  methods: {
    goToDetail: function(index, area) {
      this.$router.push('/attractions?id=' + index + '&areaId=' + area)
    },
    getData() {
      if(this.page <= 1) this.scenicList = [];
      var url = '';
      if(this.scenicSpotId) {
        url = this.baseUrl + '/yunchao/scenic/search/'+ this.page + '/10?scenicSpotId=' + this.scenicSpotId + '&queryStr=' + this.value + '&order=' + this.order;
      }else {
        url = this.baseUrl + '/yunchao/scenic/search/'+ this.page + '/10?areaId=' + this.areaId + '&queryStr=' + this.value + '&order=' + this.order;
      }
      this.$http.get(url).then(res => {
        if(res.data.data.result && res.data.data.result.length > 0) {
          res.data.data.result.forEach(item => {
            this.scenicList.push(item)
          })
          this.loading = false;
          this.totalNum = res.data.data.pagination.totalCount
        }
        if(this.totalNum <= this.scenicList.length) {
          this.finished = true;
        }
      })
    },
    onLoad() {
      this.page += 1;
      if(this.page >= 1) {
        this.getData();
      }
    }
  }
}
</script>

