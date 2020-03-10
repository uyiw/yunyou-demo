<template>
  <div class="common-detail-name-box">
    <div class="common-detail-name-white"></div>
    <div class="common-detail-name">{{name}}</div>
    <div  class="common-detail-like-box">
        <div v-if="likeCount>0">{{likeCount>9999?'9999+':likeCount}}</div>
        <img v-if="likeCount>0" src="../../assets/img/heart.png">
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
<style lang="scss">
  .common-detail-name-box{
    width:100%;
    height:94px;
    position: relative;
    border-bottom: 1px solid rgba(238,238,238,1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .common-detail-name-white{
        left:-40px;
        top:0;
        bottom: 0;
        margin:auto;
        position: absolute;
        width:20px;
        height:49px;
        background:rgba(0,190,94,1);
    }
    .common-detail-name{
        height:56px;
        font-size:40px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(45,45,45,1);
        line-height:56px;
        flex-shrink: 0;
    }
    .common-detail-like-box{
        display: flex;
        flex-shrink: 0;
        align-items: center;
        &>div{
          height:42px;
          font-size:30px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(45,45,45,1);
          line-height:42px;
        }
        &>img{
          width:39px;
          height:33px;
          margin-left:10px;
        }
    }
  }
</style>
