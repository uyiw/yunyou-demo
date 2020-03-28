<template>
  <div id="pay-total">
    <commonNav :navText="navText" :needM="true" @chooseM="chooseM"></commonNav>
    <div class="pay-total-content">
        <div class="pay-item-box" v-for="(item,index) in payList" :key="index">
            <img :src="item.imageUrl"/>
            <div class="pay-item-box-right">
                <div class="pay-item-name">{{item.name}}</div>
                <div class="pay-item-price">￥{{parseFloat(item.price).toFixed(2)}}</div>
            </div>
        </div>
    </div>
    <pay :show="show" :totalPrice="totalPrice" @backOrder="backOrder" @confirmClick="confirmClick"></pay>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import pay from '../components/common/pay'
export default {
  data() {
    return {
      navText:"结算",
      payList:[],
      show: false,
      totalPrice: '',
      notifyUrl: '',
      openId: ''
    }
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/order/getOrderSn?token=' + localStorage.getItem('cookie') + '&orderSn=' + this.$route.query.id).then(res => {
      if(res.data.message == '无登录') {
        this.$router.push('/')
      }else if(res.data.message == '操作成功'){
        res.data.data[0].forEach(item => {
          item.cartProducts.forEach(item1 => {
            this.payList.push(item1)
          })
        })
        this.totalPrice = res.data.data[1]
        this.notifyUrl = res.data.data[2]
        this.openId = res.data.data[3]
      }
    })
  },
  methods:{
    handleChangeTab:function(id){
      id!=this.activeId?this.activeId=id:'';
    },
    chooseM: function() {
      this.show = true;
    },
    backOrder: function() {
      this.show = false;
    },
    confirmClick: function() {
      this.$http.post(this.baseUrl + '/yunchao/weixinPay/unifiedOrder', {
        openid: this.openId,
        detail: '',
        notifyUrl: this.notifyUrl,
        body: '',
        outTradeNo: this.$route.query.id,
        totalFee: parseFloat(this.totalPrice) * 100,
      }).then(res => {

      })
    }
  },
  components: {
    commonNav,
    pay
  }
}
</script>
<style lang="scss">
  @import '../assets/css/payTotal.scss';

</style>
