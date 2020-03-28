<template>
  <div class="car-box">
    <div class="car-content">
        <div class="car-hearder">
            <img src="../../assets/img/carBack.png" @click="closeBtn" />
            <div>购物车</div>
        </div>
        <div class="car-list-box">
            <div v-if="carList.length > 0" class="car-item-box" v-for="(item,index) in carList" :key="index">
                <div class="store-header">
                    <img @click="handleSelectStore(true,item.id)" v-if="!item.isSelect" src="../../assets/img/noSelect.png" class="store-no-select">
                    <img @click="handleSelectStore(false,item.id)" v-else class="store-select" src="../../assets/img/carSelect.png" />
                    <div class="store-name">{{item.storeName}}</div>
                </div>
                <div class="shop-box">
                    <div class="shop-item-box" v-for="(item1,index1) in item.shoping" :key="index1">
                        <img @click="handleSelectShoping(item.id,item1.id)" v-if="!item1.isSelect" src="../../assets/img/noSelect.png" class="store-no-select">
                        <img @click="handleSelectShoping(item.id,item1.id)" v-else class="store-select" src="../../assets/img/carSelect.png" />
                        <img class="shop-img" :src="item1.img" />
                        <div class="shop-right">
                            <img @click="handleDeleteStore(item1.id, item.id)" class="store-delete" src="../../assets/img/close.png">
                            <div class="shop-name">{{item1.name}}</div>
                            <div class="shop-guige">{{item1.guige}}</div>
                            <div class="shop-price-box">
                                <div class="shop-price">￥{{parseInt(item1.price).toFixed(2)}}</div>
                                <van-stepper @change="sumAllSelect" :name="'productId='+ item1.id +'&storeId='+ item.id +''" v-model="item1.count" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="no-data">暂无数据</div>
        </div>
        <div class="car-bottom">
            <div class="car-bottom-left">
                <img @click="haddleSelectAll(true)" v-if="!allSelect" src="../../assets/img/noSelect.png" class="store-no-select">
                <img @click="haddleSelectAll(false)" v-else class="store-select" src="../../assets/img/carSelect.png" />
                <div>全选</div>
            </div>
            <div class="car-bottom-center">
                <div>合计:</div>
                <div>￥{{totalPrice.toFixed(2)}}</div>
            </div>
            <div class="car-bottom-right" @click="createOrder">去结算</div>
        </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  props: ['carList1'],
  data() {
    return {
      allSelect:false,
      totalPrice:0,
      carList: [{
        shoping: []
      }],
      logisticsId: ''
    }
  },
  watch: {
    carList1: function(newVal, oldVal) {
      if(newVal) this.carList = newVal
    }
  },
  methods:{
    handleDeleteStore:function(productId, storeId){
        this.$http.get(this.baseUrl + '/yunchao/cart/deleteCart?token=' +localStorage.getItem('cookie') + '&productId=' + productId + '&storeId=' + storeId).then(res => {
          if(res.data.message == '操作成功') {
            Toast.success('删除成功')
            for(let i=0;i<this.carList.length;i++){
                if(this.carList[i].id == storeId){
                  if(this.carList[i].shoping.length > 0) {
                    for(let j = 0; j < this.carList[i].shoping.length; j++) {
                      if(this.carList[i].shoping[j].id == productId) {
                        this.carList[i].shoping.splice(j,1)
                        j--;
                        if(this.carList[i].shoping.length == 0) {
                          this.carList.splice(i, 1)
                          i--;
                        }
                      }
                    }
                  }
                }
            }
            this.sumAllSelect()
            // this.getData();
          }else {
            Toast.fail(res.data.message)
          }
        })

    },
    handleSelectStore:function(select, id){
        this.carList=this.carList.map(item=>{
            if(item.id==id){
                item.isSelect=select;
                item.shoping.forEach(item1=>{
                    item1.isSelect=select;
                    return item1;
                })
            }
            return item;
        })
        this.sumAllSelect()
    },
    handleSelectShoping:function(id,shopId){
        this.carList=this.carList.map(item=>{
            if(item.id==id){
                item.shoping.forEach(item1=>{
                    if(item1.id==shopId){
                        item1.isSelect=!item1.isSelect;
                    }
                    return item1;
                })
                let isAll=true;
                item.shoping.map(item1=>{
                    if(!item1.isSelect){
                        isAll=false;
                    }
                })
                item.isSelect=isAll;
            }
            return item;
        })
        this.sumAllSelect()
    },
    sumAllSelect:function(value, detail){
        let isAll=true;
        let totalMoney=0;
        this.carList.map(item=>{
            if(!item.isSelect){
                isAll=false;
            }
            item.shoping.map(item1=>{
                if(item1.isSelect){
                    totalMoney+=item1.count*parseFloat(item1.price);
                }

            })
        })
        this.allSelect=isAll;
        this.totalPrice=totalMoney;
        if(detail && detail.name) {
          var detailIndex = detail.name.split('&')
          this.$http.put(this.baseUrl + '/yunchao/cart/setNum?token=' + localStorage.getItem('cookie') + '&storeId=' + detailIndex[1].split('=')[1] + '&productId=' + detailIndex[0].split('=')[1] + '&num=' + value).then(res => {})
        }
    },
    haddleSelectAll:function(select){
        this.carList=this.carList.map(item=>{
            item.shoping.forEach(item1=>{
                  item1.isSelect=select;
                  return item1;
            })
            item.isSelect=select;
            return item;
        })
        this.sumAllSelect()
    },
    closeBtn: function() {
      this.$emit('closeBtn')
    },
    createOrder: function() {
      var storeData = [];
      var data = [], selectData = [];
      for(var i = 0; i < this.carList.length; i++) {
        for(var j =0; j < this.carList[i].shoping.length; j++) {
          if(this.carList[i].shoping[j].isSelect) {
            data.push(this.carList[i].shoping[j])
            if(storeData.length <= 0) storeData.push({ "name": this.carList[i].storeName,  "storeId": this.carList[i].id})
            else {
              for(let z = 0; z < storeData.length; z++) {
                if(this.carList[i].id != storeData[z].storeId ) {
                  storeData.push({ "name": this.carList[i].storeName,  "storeId": this.carList[i].id})
                }
              }
            }
          }
        }
      }
      for(var i = 0; i < storeData.length; i++) {
        for(var z = 0; z < data.length; z++) {
          if(storeData[i].storeId == data[z].storeId) {
            if(selectData.length == 0) selectData.push({"cartStore": storeData[i], "cartProducts": [{
                    "name": data[z].name,
                    "price": data[z].price,
                    "storeId": data[z].storeId,
                    "cartNum": data[z].count,
                    "productId": data[z].id,
                    "imageUrl": data[z].img
                  }]})
            else {
              for(var k = 0 ;k < selectData.length; k++) {
                if(storeData[i].storeId == selectData[k].cartStore.storeId) {
                  selectData[k].cartProducts.push({
                    "name": data[z].name,
                    "price": data[z].price,
                    "storeId": data[z].storeId,
                    "cartNum": data[z].count,
                    "productId": data[z].id,
                    "imageUrl": data[z].img
                  })
                }else {
                  selectData.push({"cartStore": storeData[i], "cartProducts": [{
                    "name": data[z].name,
                    "price": data[z].price,
                    "storeId": data[z].storeId,
                    "cartNum": data[z].count,
                    "productId": data[z].id,
                    "imageUrl": data[z].img
                  }]})
                }
              }
            }
          }
        }
      }
      this.$http.post(this.baseUrl + '/yunchao/order/create?token='+ localStorage.getItem('cookie') +'&logisticsId='+ this.logisticsId +'&price='+ this.totalPrice +'&payMethod=2', selectData).then(res=> {
        if(res.data.data) {
          this.$router.push('/payTotal?id=' + res.data.data);
        }else {
          Toast.fail(res.data.message)
        }
      })
    }
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
              .no-data {
                font-size:36px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(45,45,45,1);
                text-align: center;
              }
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
                            position: relative;
                            .store-delete{
                                width:20px;
                                height:20px;
                                position: absolute;
                                top:10px;
                                right:0;
                            }
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
