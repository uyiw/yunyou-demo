<template>
  <div class="news-list">
    <commonNav navText="云游头条"></commonNav>
    <div class="news-list-con">
      <div v-for="(item, index) in newsList" :key="index" class="clearfix">
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
      newsList: [
      {
        title: '民俗文化馆开业了！',
        id: 1,
      },
      {
        title: '民俗文化馆开业了！',
        id: 1,
      },
      {
        title: '民俗文化馆开业了！',
        id: 1,
      },
      {
        title: '民俗文化馆开业了！',
        id: 1,
      },
    ]
    }
  },
  components: {
    commonNav,
    commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/newsList.scss'
</style>

