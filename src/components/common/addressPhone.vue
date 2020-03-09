<template>
  <div class="common-address-phone-box">
    <div class="common-address-box common-address-phone">
      <img src="../../assets/img/location.png">
      <div>{{location}}</div>
    </div>
    <div class="common-phone-box common-address-phone">
      <img src="../../assets/img/phone.png">
      <div>{{phone}}</div>
    </div>
    <router-link class="common-address-phone-map-box" tag="div" :to="toUrl">
      <div>地图/周边</div>
      <img src="../../assets/img/right.png">
    </router-link>
  </div>
</template>
<script>
//  <div class="common-address-phone-map-box">
//       <div>地图/周边</div>
//       <img src="../../assets/img/right.png">
//     </div>
import pointTitle from '../common/pointTitle'
export default {
  props:{
      location:{
          type:String,
          default:''
      },
      phone:{
          type:Number,
          default:''
      },
      toUrl:{
          type:String,
          default:'/'
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
  .common-address-phone-box{
    width:100%;
    padding-top:20px;
    .common-address-phone{
      width:100%;
      display:flex;
      overflow:hidden;
      &>img{
        width:40px;
        height:44px;
        margin-top:3px;
        margin-left:-6px;
        flex-shrink: 0;
        margin-right:15px;
      }
      &>div{
        flex-shrink:0;
        font-size:30px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(45,45,45,1);
        line-height:42px;
        word-wrap:break-word;
        white-space: normal;
        overflow-wrap: break-word;
        width:620px;
      }
    }
    .common-phone-box{
      margin-top:24px;
    }
    .common-address-phone-map-box{
      width:100%;
      display:flex;
      margin-top:30px;
      justify-content:flex-end;
      align-items:center;
      &>img{
        width:26px;
        height:27px;
        margin-left:4px;

      }
      &>div{
        height:37px;
        font-size:26px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(1,190,94,1);
        line-height:37px;
      }
    }
  }
  
</style>