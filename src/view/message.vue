<template>
  <div id="message">
    <commonNav :navText="navText"></commonNav>
    <div class="message-list">
        <router-link :to="item.url" class="message-item" v-for="(item,index) in messageList" :key="index">
            <img class="message-icon" :src="item.icon" />
            <div class="message-info">
                <div class="message-title">{{item.title}}</div>
                <div class="message-des">
                    <div v-if="!item.isRead" class="message-dot"></div>
                    <div class="message-des-content">{{item.des}}</div>
                </div>
            </div>
            <div class="message-right">
                <div>查看</div>
                <img src="../assets/img/messageRight.png" />
            </div>
        </router-link>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonBottom from '../components/commonBottom'
import commonNav from '../components/commonNav'
export default {
  data() {
    return {
      messageList:[{
          icon:require("../assets/img/1-3.png"),
          title:'编辑游记主题',
          des:'编辑游记主题',
          isRead:true,
          url: '/myYouji'
      },{
          icon:require("../assets/img/1-2.png"),
          title:'热门活动',
          des:'暑期嗨翻天',
          isRead:false,
          url: ''
      }],
      navText:'消息中心'
    }
  },
  components: {
    commonNav,
    commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/message.scss';

</style>

