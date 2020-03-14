<template>
  <div id="pay-total">
    <commonNav :navText="navText"></commonNav>
    <div class="pay-total-content">
        <div class="pay-item-box" v-for="(item,index) in payList" :key="index"> 
            <img :src="item.img"/>
            <div class="pay-item-box-right">
                <div class="pay-item-name">{{item.name}}</div>
                <div class="pay-item-price">￥{{item.price.toFixed(2)}}</div>
            </div>
        </div>
    </div>
    <pay></pay>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import pay from '../components/common/pay'
export default {
  data() {
    return {
      navText:"结算",
      payList:[{
          img:require("../assets/img/2.png"),
          name:'产品名字',
          price:99
      }]
    }
  },
  methods:{
    handleChangeTab:function(id){
      id!=this.activeId?this.activeId=id:'';
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
