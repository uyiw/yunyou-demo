<template>
  <div class="car-box">
    <div class="car-content">
        <div class="car-hearder">
            <img src="../../assets/img/carBack.png" />
            <div>购物车</div>
        </div>
        <div class="car-list-box">
            <div class="car-item-box" v-for="(item,index) in carList" :key="index">
                <div class="store-header">
                    <img v-if="!item.isSelect" src="../../assets/img/noSelect.png" class="store-no-select">
                    <img v-else class="store-select" src="../../assets/img/carSelect.png" />
                    <div class="store-name">{{item.storeName}}</div>
                    <img class="store-delete" src="../../assets/img/close.png">
                </div>
                <div class="shop-box">
                    <div class="shop-item-box" v-for="(item1,index1) in item.shoping" :key="index1">
                        <img v-if="!item.isSelect" src="../../assets/img/noSelect.png" class="store-no-select">
                        <img v-else class="store-select" src="../../assets/img/carSelect.png" />
                        <img class="shop-img" :src="item1.img" />
                        <div class="shop-right">
                            <div class="shop-name">{{item1.name}}</div>
                            <div class="shop-guige">{{item1.guige}}</div>
                            <div class="shop-price-box">
                                <div class="shop-price">￥{{item1.price.toFixed(2)}}</div>
                                <van-stepper v-model="item1.count" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="car-bottom">
            <div class="car-bottom-left">
                <img v-if="allSelect" src="../../assets/img/noSelect.png" class="store-no-select">
                <img v-else class="store-select" src="../../assets/img/carSelect.png" />
                <div>全选</div>
            </div>
            <div class="car-bottom-center">
                <div>合计:</div>
                <div>￥{{totalPrice.toFixed(2)}}</div>
            </div>
            <div class="car-bottom-right">去结算</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        allSelect:false,
        totalPrice:1000,
        carList:[{
            storeName:'店名',
            isSelect:false,
            shoping:[{
                img:require("../../assets/img/2.png"),
                name:'商品名字',
                guige:'规格',
                price:99,
                count:1,
                isSelect:false,
            },{
                img:require("../../assets/img/2.png"),
                name:'商品名字',
                guige:'规格',
                price:99,
                count:1,
                isSelect:false,
            }]
        },{
            storeName:'店名',
            shoping:[{
                img:require("../../assets/img/2.png"),
                name:'商品名字',
                guige:'规格',
                price:99,
                count:1,
                isSelect:false,
            }]
        },{
            storeName:'店名',
            shoping:[{
                img:require("../../assets/img/2.png"),
                name:'商品名字',
                guige:'规格',
                price:99,
                count:1,
                isSelect:false,
            }]
        }]
    }
  },
  methods:{
      
  }
}
</script>
<style lang="scss">
  .car-box{
      width:100%;
      height:100%;
      position:fixed;
      left:0px;
      top:0px;
      background:rgba(0,0,0,0.49);
      z-index:100000;
      display:flex;
      align-items:center;
      justify-content:center;
      .car-content{
          width:680px;
          max-height:1096px;
          background:rgba(240,240,240,1);
          .car-hearder{
              width:100%;
              height:90px;
              background:rgba(240,240,240,0.68);
              position:relative;
              &>img{
                width:48px;
                height:48px;
                position:absolute;
                top:0px;
                bottom:0px;
                left:20px;
                margin:auto;
              }
              &>div{
                width:100%;
                height:90px;
                line-height:90px;
                font-size:36px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(45,45,45,1);
                text-align:center;
              }
          }
          .car-list-box{
              width:100%;
              display:flex;
              flex-direction:column;
              max-height:906px;
              overflow:scroll;
              .car-item-box{
                  width:100%;
                  margin-top:20px;
                  padding:22px 39px 30px 20px;
                  background:white;
                  .store-header{
                      width:100%;
                      display:flex;
                      align-items:center;
                      height:50px;
                      .store-no-select{
                        width:30px;
                        height:30px;
                      }
                      .store-name{
                            font-size:36px;
                            font-family:PingFangSC-Regular,PingFang SC;
                            font-weight:400;
                            color:rgba(45,45,45,1);
                            line-height:50px;
                            width:510px;
                            margin-left:30px;
                            margin-right:30px;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                      }
                      .store-select{
                          width:30px;
                          height:30px;
                          flex-shrink:0;
                      }
                      .store-delete{
                          width:20px;
                          height:20px;
                          flex-shrink:0;
                      }

                  }
                  .shop-box{
                      .shop-item-box{
                        margin-top:20px;
                        display:flex;
                        align-items:center;
                        .store-no-select{
                            width:30px;
                            height:30px;
                        }
                        .store-select{
                            width:30px;
                            height:30px;
                            flex-shrink:0;
                        }
                        .shop-img{
                            width:200px;
                            height:200px;
                            margin-left:20px;
                        }
                        .shop-right{
                            width:344px;
                            display:flex;
                            flex-direction:column;
                            margin-left:26px;
                            height:200px;
                            .shop-name{
                                font-size:32px;
                                font-family:PingFangSC-Regular,PingFang SC;
                                font-weight:400;
                                color:rgba(45,45,45,1);
                                line-height:45px;
                                width:355px;
                                overflow:hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                            .shop-guige{
                                width:335px;
                                height:53px;
                                background:rgba(247,247,247,1);
                                border-radius:8px;
                                padding:0px 20px;
                                margin-top:20px;
                                font-size:28px;
                                font-family:PingFangSC-Regular,PingFang SC;
                                font-weight:400;
                                color:rgba(153,153,153,1);
                                line-height:53px;
                                overflow:hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                            .shop-price-box{
                                width:100%;
                                display:flex;
                                justify-content:space-between;
                                align-items:center;
                                margin-top:20px;
                                .shop-price{
                                    font-size:32px;
                                    font-family:PingFangSC-Regular,PingFang SC;
                                    font-weight:400;
                                    color:rgba(213,37,33,1);
                                    line-height:45px;
                                
                                }
                                .van-stepper__minus, .van-stepper__plus{
                                    background:none;
                                    width:80px;
                                    height:80px;
                                    padding:0;
                                }
                                .van-stepper__minus::before,.van-stepper__plus::before{
                                    width: 22px;
                                    height: 4px;
                                    background:rgba(163,163,163,1);
                                }
                                .van-stepper__minus--disabled:before{
                                    background:rgba(235,235,235,1) !important;
                                }
                                .van-stepper__plus::after{
                                    width: 4.0001px;
                                    height: 22px;
                                    background:rgba(163,163,163,1);
                                }
                                .van-stepper__input{
                                    width:48px !important;
                                    height:33px !important;
                                    border-radius:6px;
                                    border:2px solid rgba(235,235,235,1);
                                    background:white;
                                    margin-left:-15px;
                                    margin-right:-15px;
                                }
                            }
                        }
                      }
                      
                      
                  }
              }
              .car-item-box:nth-of-type(1){
                  margin-top:0px;
              }
          }
          .car-bottom{
              width:100%;
              height:101px;
              display:flex;
              padding-left:16px;
              justify-content:space-between;
              align-items:center;
              border-top:1px solid rgba(220,220,220,1);
              background:white;
              .car-bottom-left,.car-bottom-center{
                display:flex;
                align-items:center;
                flex-shrink:0;
              }
              .car-bottom-left{
                  &>img{
                      width:40px;
                      height:40px;
                      margin-right:12px;
                  }
                  &>div{
                    font-size:30px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(45,45,45,1);
                    line-height:42px;
                  }
              }
              .car-bottom-center{
                  &>div:nth-of-type(1){
                    font-size:36px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(45,45,45,1);
                    line-height:50px;
                  }
                  &>div:nth-of-type(2){
                    font-size:42px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color:rgba(213,37,33,1);
                    line-height:59px;
                    margin-left:20px;
                  }
              }
              .car-bottom-right{
                width:195px;
                height:100px;
                flex-shrink:0;
                background:rgba(215,38,32,1);
                font-size:36px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(255,219,219,1);
                text-align:center;
                line-height:100px;
              }
          }
      }
  }
</style>
