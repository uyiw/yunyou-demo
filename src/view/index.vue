<template>
  <div id="shouye">
    <commonHeader :bannerList="bannerList"></commonHeader>
    <div class="shouye-type">
      <router-link tag="div" to=""><img src="../assets/img/jingqu.png" />景区</router-link>
      <router-link tag="div" to=""><img src="../assets/img/xiangsu.png" />乡宿</router-link>
      <router-link tag="div" to=""><img src="../assets/img/canyin.png" />餐饮</router-link>
      <router-link tag="div" to=""><img src="../assets/img/techan.png" />特产</router-link>
    </div>
  </div>
</template>
<script>
import commonHeader from '../components/commonHeader'
export default {
  data() {
    return {
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
    }
  },
  components: {
    commonHeader
  }
}
</script>
<style lang="scss">
  @import '../assets/css/shouye.scss';
</style>

