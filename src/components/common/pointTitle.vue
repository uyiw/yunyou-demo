<template>
  <div class="common-point-title-box" :style="!isPadding?{paddingTop:0}:{}">
    <div class="common-point"></div>
    <div class="common-point-title">{{text}}</div>
  </div>
  
</template>
<script>
export default {
  props:{
      text:{
          type:String,
          default:'详情介绍'
      },
      isPadding:{
          type:Boolean,
          default:true
      }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
.common-point-title-box{
  width:100%;
  display: flex;
  align-items: center;
  padding-top:20px;
  .common-point{
    width:12px;
    height:12px;
    background:rgba(1,190,94,1);
    border-radius: 50%;
    margin-right:16px;
  }
  .common-point-title{
    height:42px;
    font-size:30px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(1,190,94,1);
    line-height:42px;
  }
}
</style>

