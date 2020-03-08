<template>
  <div class="common-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item">
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
