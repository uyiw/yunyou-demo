<template>
  <div id="xiangsu">
    <commonNav :navText="navText"></commonNav>
    <commonHeader :bannerList="bannerList"></commonHeader>
    <div class="xiangsu-content">
      <div class="xiangsu-select-box"></div>
      <div></div>
    </div>
  </div>
</template>
<script>
import commonHeader from '../components/commonHeader'
import commonNav from '../components/commonNav'
export default {
  data() {
    return {
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      navText:'乡宿'
    }
  },
  components: {
    commonHeader,
    commonNav
  }
}
</script>
<style lang="scss">
  @import '../assets/css/xiangsu.scss';
</style>

