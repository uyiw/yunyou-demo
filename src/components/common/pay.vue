<template>
  <div class="pay-box">
    <div class="pay-card">
        <div class="pay-card-title">优惠券</div>
        <div class="pay-card-right">
            <div class="pay-card-name">无可用</div>
            <img src="../../assets/img/carRight.png" />
        </div>
    </div>
    <div class="pay-type-title">支付方式(可以选择任意支付方式）</div>
    <div class="pay-item" @click="changeType(1)">
        <img class="pay-item-icon" src="../../assets/img/wx.png" />
        <img v-if="payType==1" class="pay-select" src="../../assets/img/carSelect.png">
        <img v-else class="pay-select" src="../../assets/img/noSelect.png">
    </div>
    <div class="pay-item" @click="changeType(2)">
        <img class="pay-item-icon" src="../../assets/img/apply.png" />
        <img v-if="payType==2" class="pay-select" src="../../assets/img/carSelect.png">
        <img v-else class="pay-select" src="../../assets/img/noSelect.png">
    </div>
    <div class="pay-button-box">
        <div class="pay-button">￥{{totalMoney.toFixed(2)}}/确认支付</div>
    </div>
    <toast></toast>
  </div>
</template>
<script>
import toast from "./toast"
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
        payType:1,
        totalMoney:100,
    }
  },
  methods:{
      changeType:function(type){
          if(this.payType!=type){
              this.payType=type;
          }
      }
  },
  components:{
      toast,
  }
}
</script>
<style lang="scss">
  .pay-box{
     width:100%;
     padding:20px 44px;
     .pay-card{
         width:100%;
         display:flex;
         justify-content:space-between;
         align-items:center;
         .pay-card-title{
            height:40px;
            font-size:28px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(45,45,45,1);
            line-height:40px;
         }
         .pay-card-right{
             display:flex;
             align-items:center;
             &>div{
                font-size:26px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(45,45,45,1);
                line-height:37px;
                margin-right:10px;
             }
             &>img{
                 width:31px;
                 height:30px;
             }
         }
     }
     .pay-type-title{
        width:100%;
        height:48px;
        font-size:26px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(45,45,45,1);
        line-height:37px;
        border-bottom:1px solid rgba(224,224,224,1);
        margin-top:87px;
     }
     .pay-item{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:30px;
        .pay-item-icon{
            width:100px;
            height:100px;
        }
        .pay-select{
            width:30px;
            height:30px;
        }
     }
     .pay-button-box{
        width:100%;
        height:100px;
        .pay-button{
            width:750px;
            height:100px;
            text-align:center;
            font-size:42px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:100px;
            background:rgba(255,141,25,1);
            position:fixed;
            left:0px;
            bottom:0px;
            z-index:10000;
        }
     }
  }
</style>
