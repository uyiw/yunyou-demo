<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/css/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family:PingFangSC-Regular,PingFang SC;
  min-height: 100vh;
  padding-bottom: 110px;
}
.van-toast {
  width: 50%!important;
  font-size: 28px!important;
  line-height: 34px!important;
  .van-icon-fail, .van-icon-success {
    display: none!important;
  }
  .van-toast__text {
    margin-top: 0!important;
  }
}
.van-list {
  width: 100%!important;
}
.van-picker-column__item, .van-picker__cancel, .van-picker__confirm {
  font-size: 30px!important;
}
.van-picker__toolbar {
  line-height: 60px!important;
  height: auto!important;
}

</style>
