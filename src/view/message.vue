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
  .message-item{
      width:100%;
      padding:24px 30px;
      border-bottom:2px solid rgba(191,191,191,1);
      display:flex;
      align-items:center;
      .message-icon{
          width:62px;
          height:62px;
          margin-right:30px;
          flex-shrink:0;
      }
      .message-info{
          width:475px;
          .message-title{
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            width:100%;
            height:50px;
            font-size:36px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(64,64,64,1);
            line-height:50px;
          }
          .message-des{
              display:flex;
              align-items:center;
              width:100%;
              margin-top:2px;
              .message-dot{
                width:12px;
                height:12px;
                background:rgba(1,190,94,1);
                border-radius:50%;
                margin-right:6px;
                flex-shrink:0;
              }
              .message-des-content{
                width:457px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                height:42px;
                font-size:30px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(64,64,64,1);
                line-height:42px;
              }
          }
      }
      .message-right{
          display:flex;
          align-items:center;
          flex-shrink:0;
          &>div{
            height:42px;
            font-size:30px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:42px;
          }
          &>img{
              margin-left:2px;
              width:31px;
              height:33px;
          }
      }
  }
</style>

