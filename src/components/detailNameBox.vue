<template>
  <div class="common-detail-name-box">
    <div class="common-detail-name-white"></div>
    <div class="common-detail-name">{{name}}</div>
    <div  class="common-detail-like-box">
        <div :show="likeCount>0">{{likeCount>9999?'9999+':likeCount}}</div>
        <img :show="likeCount>0" src="../assets/img/heart.png">
    </div>
  </div>
</template>
<script>
export default {
  props:{
      name:{
          type:String,
          default:'详情介绍'
      },
      likeCount:{
          type:Number,
          default:0
      }
  },
  data() {
    return {
    }
  }
}
</script>
