<template>
  <div class="buy-box">
    <div class="buy-fixed-box">
        <div class="buy-left">
            <div class="buy-left-icon-box" @click="showCar()">
                <img src="../../assets/img/car.png" />
                <div>购物车</div>
            </div>
            <div class="buy-left-icon-box" @click="collect()">
                <img src="../../assets/img/star.png" />
                <div>{{ flag ? '已收藏' : '点击收藏' }}</div>
            </div>
        </div>
        <div class="buy-right">
            <div class="add-car" @click="addCar">加入购物车</div>
            <div class="buy-now">立即购买</div>
        </div>
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
      },
      flag: {
        type: [String, Number]
      }
  },
  data() {
    return {
    }
  },
  methods: {
    addCar() {
      this.$emit('clickCar', 1)
    },
    collect() {
      this.$emit('collect')
    },
    showCar() {
      this.$emit('showCar')
    }
  }
}
</script>
<style lang="scss">
  .buy-box{
      width:100%;
      height:111px;
      margin-top:10px;
      .buy-fixed-box{
          width:750px;
          height:111px;
          position:fixed;
          left:0px;
          bottom:0px;
          display:flex;
          z-index:10000;
          border-top:1px solid rgba(220,220,220,1);
          .buy-left{
              width:338px;
              height:110px;
              display:flex;
              align-items:center;
              justify-content:space-between;
              .buy-left-icon-box{
                  display:flex;
                  flex-direction:column;
                  align-items:center;
                  &>img{
                    width:42px;
                    height:42px;
                  }
                  &>div{
                    height:33px;
                    font-size:24px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(52,52,52,1);
                    line-height:33px;
                    margin-top:3px;
                  }
              }
              .buy-left-icon-box:nth-of-type(1){
                  margin-left:41px;
              }
              .buy-left-icon-box:nth-of-type(2){
                  margin-right:64px;
              }
          }
          .buy-right{
              width:412px;
              height:110px;
              display:flex;
              &>div{
                width:206px;
                height:110px;
                font-size:34px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:110px;
                text-align:center;
              }
              .add-car{
                background:rgba(0,190,94,1);
              }
              .buy-now{
                background:rgba(255,141,26,1);
              }
          }
      }
  }
</style>
