<template>
  <div :class="height ? 'common-header changeHeight' : 'common-header'">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item">
      </van-swipe-item>
    </van-swipe>
    <div class="shouye-top-sea clearfix">
      <div class="pull-left shouye-address">
        <img src="../assets/img/address.png" />{{ address }}
      </div>
      <van-search class="pull-left" v-model="value" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['bannerList', 'height'],
  data() {
    return {

      address: '北京',
      value: ''
    }
  }
}
</script>
