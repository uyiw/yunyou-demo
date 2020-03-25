<template>
  <div class="news-list">
    <commonNav navText="云游头条"></commonNav>
    <div class="news-list-con">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="(item, index) in newsList" :key="index" class="clearfix news-item" @click="goToDetail(item.id)">
          <img class="pull-left" src="../assets/img/laba.png" />
          <p class="pull-left">{{ item.title }}</p>
          <img class="next pull-right" src="../assets/img/next.png" />
        </div>
      </van-list>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
      newsList: [],
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
    }
  },
  components: {
    commonNav,
    commonBottom
  },
  mounted() {

  },
  methods: {
    getData() {
      this.$http.get(this.baseUrl + '/yunchao/headlines/search/' + this.page + '/10').then(res => {
        if(res.data.data[0] && res.data.data[0].length > 0) {
          res.data.data[0].forEach(item => {
            this.newsList.push(item)
          })
          this.loading = false;
          this.totalNum = res.data.data[1];
          if(this.newsList.length >= this.totalNum) {
            this.finished = true;
          }
        }
      })
    },
    goToDetail: function(id) {
      this.$router.push('/newsDetail?id=' + id)
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
<style lang="scss">
  @import '../assets/css/newsList.scss'
</style>

