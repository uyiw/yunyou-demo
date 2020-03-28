<template>
  <div id="techan-detail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="techan-detail-content">
        <detailNameBox :name="specialLocalProduct.name" :like="true"></detailNameBox>
        <pointTitle text="推荐购买地址"></pointTitle>
        <addressPhone :location="detailInfo.address" :phone="detailInfo.phone" :toUrl="detailInfo.toUrl"></addressPhone>
        <div class="techan-detail-point-box">
          <pointCard :content="detailInfo.detail.content" :text="detailInfo.detail.title"></pointCard>
        </div>
    </div>
    <buy :flag="flag" @clickCar="clickCar" @collect="collect" @showCar="showCar"></buy>
    <car v-if="show" :carList1="carList1" @closeBtn="closeBtn" />
  </div>
</template>
<script>
import { Toast } from 'vant'
import commonSwiper from '../components/common/commonSwiper'
import commonNav from '../components/commonNav'
import pointTitle from '../components/common/pointTitle'
import detailNameBox from '../components/common/detailNameBox'
import pointCard from '../components/common/pointCard'
import addressPhone from '../components/common/addressPhone'
import buy from '../components/common/buy'
import car from '..//components/common/car'
export default {
  data() {
    return {
      bannerList: [],
      show: false,
      detailInfo:{
        detail: {},
      },
      navText:'详情',
      flag: '',
      specialLocalProduct: {},
      carList1: []
    }
  },
  components: {
    commonSwiper,
    commonNav,
    pointTitle,
    detailNameBox,
    pointCard,
    addressPhone,
    buy,
    car
  },
  mounted () {
    this.$http.get(this.baseUrl + '/yunchao/specialty/details/' + this.$route.query.id + '?token=' + localStorage.getItem('cookie')).then(res => {
      this.bannerList = res.data.localSpecialty.arrImgs;
      this.detailInfo = res.data.localSpecialty;
      this.detailInfo.detail = {
        title:'详情介绍',
        content: res.data.localSpecialty.info
      }
      this.specialLocalProduct = res.data.specialLocalProduct
      this.flag = res.data.specialLocalProduct.flag
    })
  },
  methods: {
    clickCar: function() {
      this.$http.post(this.baseUrl + '/yunchao/cart/add?specialtyId=' + this.$route.query.id + '&token=' + localStorage.getItem('cookie')).then(res => {
        if(res.data.message == '用户没有登录') {
          this.$router.push('/')
        }else if(res.data.message == '操作成功') {
          Toast.success(res.data.message)
        }else {
          Toast.fail(res.data.message)
        }
      })
    },
    collect: function() {
      var url = ''
      if(!this.flag) {
        url = this.baseUrl + '/yunchao/specialty/favor/add/' + this.detailInfo.id + '?token=' + localStorage.getItem('cookie')
      }else {
        url = this.baseUrl + '/yunchao/specialty/favor/cancel/' + this.detailInfo.id + '?token=' + localStorage.getItem('cookie')
      }
      this.$http.post(url).then(res => {
        if(res.data.message == '用户未登录!') {
          this.$router.push('/')
        }else if (res.data.data[0] == '点赞成功') {
          this.flag = 1;
          this.specialLocalProduct.flag = 1;
          Toast.success(res.data.data[0])
        }else if (res.data.data[0] == '取消成功') {
          this.flag = null;
          this.specialLocalProduct.flag = null;
          Toast.success(res.data.data[0])
        }else {
          Toast.fail(res.data.message)
        }
      })
    },
    showCar() {
      this.show = true;

      this.$http.get(this.baseUrl + '/yunchao/cart/query?token=' + localStorage.getItem('cookie')).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.carList1 =[];
          res.data.data.forEach(item => {
            var shoping = [];
            item.cartProducts.forEach(item1 => {
              shoping.push({
                id: item1.productId,
                img: item1.imageUrl,
                name: item1.name,
                guige:'规格',
                price: item1.price,
                count: item1.cartNum,
                isSelect:false,
                storeId: item.cartStore.storeId,
              })
            })
            this.carList1.push({
              storeName: item.cartStore.name,
              isSelect:false,
              id: item.cartStore.storeId,
              shoping: shoping
            })
          })
        }else {
          if(res.data.message == '用户没有登录') {
            this.$router.push('/')
          }else {
            Toast.fail(res.data.message)
          }
        }
      })
    },
    closeBtn() {
      this.show = false;
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/techanDetail.scss';
</style>

