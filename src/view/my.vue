<template>
  <div id="my">
    <div class="common-nav-box">
        <div class="common-nav">
            <div class="common-nav-text">我的</div>
            <div class="message-box">
                <img src="../assets/img/message.png" />
                <div v-if="messageCount>0">{{messageCount>9?'9+':messageCount}}</div>
            </div>
        </div>
    </div>
    <div class="my-info-box">
        <img src="../assets/img/2.png" />
        <div class="my-info-box-right">
            <div>帅道没朋友</div>
            <div>ID：1234567</div>
        </div>
    </div>
    <div class="my-list-box">
        <div class="my-item-box">
            <img src="../assets/img/myLove.png" />
            <div>我的收藏</div>
        </div>
        <div class="my-item-box">
            <img src="../assets/img/myYouji.png" />
            <div>我的游记</div>
        </div>
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
    }
  },
  methods:{
  },
  components: {
      commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/my.scss';
</style>

