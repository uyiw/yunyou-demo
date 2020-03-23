<template>
  <div id="newsDetail">
    <commonNav :navText="newsDetail.title"></commonNav>
    <div class="newsDeail-con">
      <h2><span>{{ newsDetail.title }}</span></h2>
      <p>{{ newsDetail.createDateStr }}</p>
      <div v-html="newsDetail.info"></div>
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
      newsDetail: {}
    }
  },
  components: {
    commonNav,
    commonBottom
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/headlines/details/' + this.$route.query.id).then(res => {
      this.newsDetail = res.data
    })
  }
}
</script>

<style lang="scss">
  .newsDeail-con {
    padding: 10px 0;
    & > h2 {
      border-left: 20px solid #00BE5E;
      font-size:40px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(84,84,84,1);
      line-height:56px;
      margin-bottom: 20px;
      padding-left: 20px;
    }
    & > p {
      margin-bottom: 20px;
      font-size:24px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(84,84,84,1);
      line-height:33px;
      padding: 0 40px;
    }
    & > div {
      padding: 0 40px;
    }
  }
</style>
