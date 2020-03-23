<template>
  <div class="common-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="baseUrl + item">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: ['bannerList'],
  data() {
      return {

      }
  }
}
</script>
<style lang="scss">
  .common-swiper{
    height: 362px;
    width: 100%;
    position: relative;
    .van-swipe {
      width: 100%;
      height: 100%;
      position: relative;
    .van-swipe-item {
      & > img {
        width: 100%;
        height: 100%;
      }
      }
      .van-swipe__indicators {
        margin-bottom: 20px;
        transform: translateX(0);
        right:40px;
        left:auto;
      }
      .van-swipe__indicator {
        width: 12px;
        height: 12px;
        margin-right: 15px;

      }
    }
  }
</style>
