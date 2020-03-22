<template>
  <div id="message">
    <commonNav :navText="navText"></commonNav>
    <div class="message-list">
        <div class="message-item" v-for="(item,index) in messageList" :key="index">
            <img class="message-icon" :src="item.icon" />
            <div class="message-info">
                <div class="message-title">{{item.title}}</div>
                <div class="message-des">
                    <div v-if="item.isRead" class="message-dot"></div>
                    <div class="message-des-content">{{item.des}}</div>
                </div>
            </div>
            <div class="message-right">
                <div>查看</div>
                <img src="../assets/img/messageRight.png" />
            </div>
        </div>
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
          icon:require("../assets/img/myLove.png"),
          title:'编辑游记主题',
          des:'编辑游记主题',
          isRead:true
      },{
          icon:require("../assets/img/myLove.png"),
          title:'编辑游记主题',
          des:'编辑游记主题',
          isRead:false
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

