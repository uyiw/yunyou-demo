<template>
  <div id="my">
    <div class="common-nav-box">
        <div class="common-nav">
            <div class="common-nav-text">我的</div>
            <router-link to="/message" class="message-box">
              <img src="../assets/img/message.png" />
              <div v-if="messageCount>0">{{messageCount>9?'9+':messageCount}}</div>
            </router-link>
        </div>
    </div>
    <div v-if="info.id" class="my-info-box">
      <img :src="info.img" />
      <div class="my-info-box-right">
          <div>{{ info.nickname }}</div>
          <div>ID：{{  info.id }}</div>
      </div>
    </div>
    <div v-else class="my-info-box" style="font-size: 20px;color: #fff;">登录</div>
    <div class="my-list-box">
        <router-link tag="div" to="/collect" class="my-item-box">
          <img src="../assets/img/myLove.png" />
          <div>我的收藏</div>
        </router-link>
        <router-link tag="div" to="myYouji" class="my-item-box">
          <img src="../assets/img/myYouji.png" />
          <div>我的游记</div>
        </router-link>
        <div class="my-item-box">
            <img src="../assets/img/myOrder.png" />
            <div>我的订单</div>
        </div>
        <div class="my-item-box">
            <img src="../assets/img/myPhone.png" />
            <div>客服电话</div>
        </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
        messageCount:1,
        info: {}
    }
  },
  methods:{
  },
  components: {
    commonBottom
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/user/isLogin?token=' + localStorage.getItem('cookie')).then(res => {
      if(res.data) this.info = res.data
      else this.info = {}
    })
  }
}
</script>
<style lang="scss">
  @import '../assets/css/my.scss';
</style>

