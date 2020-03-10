<template>
  <div class="common-point-card-box">
    <pointTitle :isPadding="isPadding" :text="text"></pointTitle>
    <div class="common-point-card-content" v-if="content!=''">{{content}}</div>
  </div>
</template>
<script>
import pointTitle from '../common/pointTitle'
export default {
  props:{
      text:{
          type:String,
          default:'详情介绍'
      },
      isPadding:{
          type:Boolean,
          default:true
      },
      content:{
          type:String,
          default:''
      }
  },
  data() {
    return {
    }
  },
  components: {
    pointTitle,
  }
}
</script>
<style lang="scss">
  .common-point-card-box{
    width:100%;
    .common-point-card-content{
      width:100%;
      box-sizing: border-box;
      padding-left:26px;
      margin-top:12px;
      font-size:26px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(45,45,45,1);
      line-height:37px;
    }
  }
</style>
