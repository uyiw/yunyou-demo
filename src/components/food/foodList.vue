<template>
  <div id="foodList">
    <div v-for="(item, index) in foodList" :key="index" class="clearfix" @click="goToDetail(item.id, item.area)">
      <img :src="baseUrl + item.imgUrl" class="pull-left" />
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
  </div>
</template>
<script>
export default {
  props: ['tab', 'areaId', 'value'],
  data() {
    return {
      foodList: [],
      order: ''
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal) {
        this.foodList = [];
        this.scenicSpotAreaId = ''
        var url = this.value ? '/yunchao/food/search/1/10?areaId=' + newVal + '&queryStr=' + this.value + '&order=' + this.order : '/yunchao/food/search/1/10?areaId=' + newVal + '&order=' + this.order;
        this.$http.get(this.baseUrl + url).then(res => {
          if(res.data.data && res.data.data.length > 0) {
            res.data.data.forEach(element => {
              element.imgUrl = element.arrImgs[0]
            });
            this.foodList = res.data.data
          }
        })
      }
    },
    value: function(newVal, oldVal) {
      this.foodList = [];
      var url = this.scenicSpotAreaId ?
      (newVal ? this.baseUrl + '/yunchao/food/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&queryStr=' + newVal + '&order=' + this.order : his.baseUrl + '/yunchao/food/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&order=' + this.order) :
      (newVal ? this.baseUrl + '/yunchao/food/search/1/10?areaId=' + this.areaId + '&queryStr=' + newVal + '&order=' + this.order : this.baseUrl + '/yunchao/scenic/search/1/10?areaId=' + this.areaId + '&order=' + this.order);
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.foodList = res.data.data
        }
      })

    },
  },
  mounted() {
    this.$parent.$on('changeAreaId', (data) => {
      this.scenicSpotAreaId = data;
      this.foodList = [];
      var url = this.baseUrl + '/yunchao/food/search/1/10?scenicSpotAreaId=' + data + '&queryStr=' + this.value + '&order=' + this.order;
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.foodList = res.data.data
        }
      })
    })
    this.$parent.$on('changePai', (data) => {
      this.order = data;
      this.foodList = [];
      var url = ''
      if(this.scenicSpotAreaId) {
        url = this.baseUrl + '/yunchao/food/search/1/10?scenicSpotAreaId=' + this.scenicSpotAreaId + '&queryStr=' + this.value + '&order=' + data;
      }else {
        url = this.baseUrl + '/yunchao/food/search/1/10?scenicSpotAreaId=' + this.areaId + '&queryStr=' + this.value + '&order=' + data;
      }

      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.foodList = res.data.data
        }
      })
    })
    if(this.$route.query.areaId) {
      this.foodList = [];
      var url = this.baseUrl + '/yunchao/food/search/1/10?areaId=' + this.$route.query.areaId;
      this.$http.get(url).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.foodList = res.data.data
        }
      })
    }
  },
  methods: {
    goToDetail: function(id, area) {
      this.$router.push('/foodDetail?id=' + id + '&areaId=' + area)
    }
  }
}
</script>
