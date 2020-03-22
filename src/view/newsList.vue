<template>
  <div class="news-list">
    <commonNav navText="云游头条"></commonNav>
    <div class="news-list-con">
      <div v-for="(item, index) in newsList" :key="index" class="clearfix" @click="goToDetail(item.id)">
        <img class="pull-left" src="../assets/img/laba.png" />
        <p class="pull-left">{{ item.title }}</p>
        <img class="next pull-right" src="../assets/img/next.png" />
      </div>
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
      newsList: []
    }
  },
  components: {
    commonNav,
    commonBottom
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/headlines/search/1/10').then(res => {
      if(res.data.data && res.data.data.length > 0) {
        this.newsList = res.data.data
      }
    })
  },
  methods: {
    goToDetail: function(id) {
      this.$router.push('/newsDetail?id=' + id)
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/newsList.scss'
</style>

