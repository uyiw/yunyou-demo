<template>
  <div id="order">
    <commonNav :navText="navText"></commonNav>
    <div class="order-nav-box">
        <div @click="changeNav(4)" :class="navId==4?'order-nav-item active':'order-nav-item'">全部</div>
        <div @click="changeNav(1)" :class="navId==1?'order-nav-item active':'order-nav-item'">待付款</div>
    </div>
      <div class="order-list">
        <div class="order-item" v-for="(item,index) in orderList" :key="index">
            <div class="order-item-time">{{item.time}}</div>
            <div class="order-item-list">
                <div class="order-item-item" v-for="(item1,index1) in item.list" :key="index1" >
                    <img :src="item1.img" />
                    <div class="order-item-item-right">
                        <div class="order-name-box">
                            <div>{{item1.name}}</div>
                            <div>¥{{parseFloat(item1.price).toFixed(2)}}</div>
                        </div>
                        <div class="order-guige-box">
                            <div>{{item1.guige}}</div>
                            <div>x{{item1.cartNum}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-bottom">共{{item.count}}件商品 实付金额：¥{{parseFloat(item.money).toFixed(2)}}</div>
        </div>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      ></van-list>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonBottom from '../components/commonBottom'
import commonNav from '../components/commonNav'
import utils from '../assets/js/utils'
export default {
  data() {
    return {
			navId:1,
      navText:'商品订单',
      loading: false,
      finished: false,
      page: 0,
      totalNum: 10,
      orderList: [],
			// orderList:[{
			// 		time:'2019-12-12  09:32',
			// 		count:3,
			// 		money:1000,
			// 		list:[{
			// 				img:require("../assets/img/2.png"),
			// 				title:'机器人',
			// 				money:100,
			// 				count:1,
			// 				guige:"白色"
			// 		},{
			// 				img:require("../assets/img/2.png"),
			// 				title:'机器人',
			// 				money:100,
			// 				count:1,
			// 				guige:"白色"
			// 		},{
			// 				img:require("../assets/img/2.png"),
			// 				title:'机器人',
			// 				money:100,
			// 				count:1,
			// 				guige:"白色"
			// 		}]
			// },{
			// 		time:'2019-12-12  09:32',
			// 		count:1,
			// 		money:1000,
			// 		list:[{
			// 				img:require("../assets/img/2.png"),
			// 				title:'机器人',
			// 				money:100,
			// 				count:1,
			// 				guige:"白色"
			// 		}]
			// }],

    }
  },
  methods:{
    changeNav:function(id){
      this.navId !=id ? this.navId=id :''
      this.page = 1;
      this.orderList = [];
      this.getData();
    },
    getData() {
      this.$http.get(this.baseUrl + '/yunchao/order/query/'+ this.page +'/10?token=' + localStorage.getItem('cookie') + '&status=' + (this.navId == 4 ? '' : this.navId)).then(res => {
        if(res.data.message == '用户没有登录'){
          this.$router.push('/')
        }else {
          console.log(res.data.data.result)
          if(res.data.data.result && res.data.data.result.length > 0) {

            res.data.data.result.forEach((item, index) => {
              item.cartDBInfo.forEach(item1 => {
                var num = 0;
                item1.cartProducts.forEach(item2 => {
                  num +=item2.cartNum
                })
                  item.num = num;
              })
              this.orderList.push({
                time: utils.formatDate(item.createDate, 'yyyy-MM-dd HH:mm:ss'),
                count: item.num,
                money: item.price,
                list: []
              })
            });
             res.data.data.result.forEach((item, index) => {
              item.cartDBInfo.forEach((item1, index1) => {
                item1.cartProducts.forEach(item2 => {
                  this.orderList[index].list.push(item2)
                })
              })
            })
          }
          console.log(this.orderList)
          this.totalNum = res.data.data.pagination.totalCount;
          if(this.totalNum <= this.orderList.length) {
            this.finished = true;
          }
        }
      })
    },
    onLoad() {
      this.page += 1;
      this.getData();
    },
  },
  components: {
      commonBottom,
      commonNav
  }
}
</script>
<style lang="scss">
  @import '../assets/css/order.scss';
  .order-nav-box{
      width:100%;
      height:72px;
      border-bottom:2px solid rgba(191,191,191,1);
      padding:0px 50px;
      display:flex;
      .order-nav-item{
          height:72px;
          border-bottom:8px solid transparent;
          margin-right:90px;
          line-height:72px;
          font-size:36px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(64,64,64,1);
      }
      .order-nav-item.active{
          border-bottom:8px solid rgba(1,190,94,1);
      }
  }
  .order-list{
      width:100%;
      display:flex;
      flex-direction:column;
      margin-top: 20px;
      .order-item{
          width:100%;
          .order-item-time{
              width:100%;
              padding:20px 50px 10px;
              font-size:30px;
              font-family:PingFangSC-Regular,PingFang SC;
              font-weight:400;
              color:rgba(64,64,64,1);
              line-height:42px;
              border-bottom:2px solid rgba(230,230,230,1);
          }
          .order-item-item{
              width:100%;
              display:flex;
              align-items:center;
              height:142px;
              border-bottom:2px solid rgba(230,230,230,1);
              padding:0px 50px;
              &>img{
                  width:104px;
                  height:104px;
                  border-radius:9px;
                  border:2px solid rgba(235,235,235,1);
                  margin-right:30px;
              }
              .order-item-item-right{
                  width:516px;
                  height:104px;
                  .order-name-box,.order-guige-box{
                      display:flex;
                      align-items:center;
                      justify-content:space-between;
                  }
                  .order-name-box{
                      font-size:30px;
                      font-family:PingFangSC-Regular,PingFang SC;
                      font-weight:400;
                      color:rgba(64,64,64,1);
                      line-height:42px;
                  }
                  .order-guige-box{
                      font-size:30px;
                      font-family:PingFangSC-Regular,PingFang SC;
                      font-weight:400;
                      color:rgba(170,169,169,1);
                      line-height:42px;
                  }
              }
          }
          .order-bottom{
              width:100%;
              padding:20px 50px;
              text-align:right;
              font-size:36px;
              font-family:PingFangSC-Regular,PingFang SC;
              font-weight:400;
              color:rgba(64,64,64,1);
              line-height:50px;
          }
      }
  }
</style>

