<template>
  <div id="foodList">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(item, index) in foodList" :key="index" class="clearfix foodItem" @click="goToDetail(item.id, item.spotId)">
        <img :src="item.url" class="pull-left" />
        <div class="pull-left">
          <h3>{{ item.name }}</h3>
          <p>
            <img src="../../assets/img/16.png" />
            <span>{{ item.address }}</span>
          </p>
          <p>
            <img src="../../assets/img/17.png" />
            <span>{{ item.phone }}</span>
          </p>
          <div>
            <span>{{ item.likeNum }}+</span>
            <img src="../../assets/img/19.png" />
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
export default {
  props: ['tab', 'areaId', 'value'],
  data() {
    return {
      foodList: [],
      order: '',
      scenicSpotId: this.$route.query.id,
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
        this.scenicSpotAreaId = ''
        this.getData();
      }
    },
    value: function(newVal, oldVal) {
      this.page = 1;
      this.getData();
    },
  },
  mounted() {
    this.$parent.$on('changeAreaId', (data) => {
      this.scenicSpotId = data;
      this.page = 1;
      this.getData();
    })
    this.$parent.$on('changePai', (data) => {
      this.order = data;
      this.page = 1;
      this.getData();
    })
  },
  methods: {
    goToDetail: function(id, area) {
      this.$router.push('/foodDetail?id=' + id + '&areaId=' + area)
    },
    getData() {
      if(this.page <= 1)this.foodList = [];
      var url = ''
      if(this.scenicSpotId) {
        url = this.baseUrl + '/yunchao/food/search/'+ this.page +'/10?scenicSpotId=' + this.scenicSpotId + '&name=' + this.value + '&order=' + this.order;
      }else {
        url = this.baseUrl + '/yunchao/food/search/'+ this.page +'/10?areaId=' + this.areaId + '&name=' + this.value + '&order=' + this.order;
      }
      this.$http.get(url).then(res => {
        if(res.data.data.result && res.data.data.result.length > 0) {
          res.data.data.result.forEach(item => {
            item.url = item.arrImgs ? item.arrImgs[0] : ''
            this.foodList.push(item)
          })
          this.loading = false;
          this.totalNum = res.data.data.pagination.totalCount;
          if(this.totalNum <=  this.foodList.length) {
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
    }
  }
}
</script>
