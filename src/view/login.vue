<template>
  <div id="login">
    <commonNav :navText="navText"></commonNav>
    <div class="login-content">
        <div class="login-title">注册/登录</div>
        <div class="inputBox firstInput">
            <van-dropdown-menu size="100px">
                <van-dropdown-item v-model="value" :options="option" />
                <img class="down" src="../assets/img/phoneDown.png" />
            </van-dropdown-menu>
            <input class="phone-input" v-model="phone" placeholder="请输入手机号码" />
        </div>
        <div class="inputBox secondInput">
            <input class="code-input" v-model="code" />
            <div v-if="!send" class="code-text">请输入验证码</div>
            <div v-else  class="code-text">{{ time }} 秒</div>
        </div>
        <div v-if="!send" class="sendCodeButton" @click="sendCode()">发送验证码</div>
        <div v-if="send" class="sendCodeButton" @click="loginClick()">登录</div>
        <div class="des des1">点击按钮即表示你同意并遵守</div>
        <div class="des">《使用协议》和《隐私协议》</div>
        <div class="wx-login" @click="weChatLogin">
            <img src="../assets/img/wx.png" />
            <div>微信</div>
        </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import commonBottom from '../components/commonBottom'
import commonNav from '../components/commonNav'
export default {
  data() {
    return {
      navText:'',
      value:1,
      phone:'',
      code:'',
      option:[
        { text: '+86', value: 1 },
        // { text: '+87', value: 2 },
      ],
      send: 0,
      time: 59
    }
  },
  methods:{
  },
  watch: {
    send: function(newVal, oldVal) {
      if(newVal) {
        var timer = setInterval(() => {
          this.time--;
          if(this.time < 1) {
            clearInterval(timer);
            this.time = 59;
            this.send = false;
          }
        }, 1000)
      }
    }
  },
  components: {
    commonNav,
  },
  methods: {
    check: function() {
      var check = true;
      if(!this.phone) {
        Toast.fail('请输入手机号码 ');
        check = false
        return check;
      }
      if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone))){
        Toast.fail('手机号码有误，请重新输入');
        check = false
        return check;
      }
      return check;
    },
    sendCode: function() {
      if(!this.check()) return
      this.$http.get(this.baseUrl + '/yunchao/user/getVerifyCode?phone=' + this.phone).then(res => {})
      this.send = 1;
    },
    loginClick: function() {
      if(!this.check()) return
      if(!this.code) {
        return Toast.fail('请输入验证码');
      }
      this.$http.get(this.baseUrl + '/yunchao/user/login/code?code='+ this.code +'&phone=' + this.phone).then(res => {
        if(res.data.data) {
          localStorage.setItem('cookie', res.data.data)
          localStorage.setItem('login', 1)
          this.$router.push('/index')
        }else {
          Toast.fail(res.data.message)
        }
      })
    },
    weChatLogin() {
      // this.$http.get(this.baseUrl + '/yunchao/user/login/wechat').then(res => {
      //   console.log()
      // })
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/login.scss';
  .login-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      width:100%;
      .login-title{
        width:100%;
        padding:0 70px;
        height:70px;
        font-size:50px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(9,9,9,1);
        line-height:70px;
        margin-top:70px;
      }
      .inputBox{
          display: flex;
          align-items:center;
          border-bottom: 2px solid rgba(224,224,224,1);
          width:620px;
      }
      .firstInput{
          height:73px;
          margin-top:43px;
          .phone-input{
            border:none;
            outline: none;
            font-size:32px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(9,9,9,1);
            height:70px;
            width:10px;
            flex-grow: 1;
            margin-left:50px;
            padding:0 10px;
          }
          .down{
              width:33px;
              height:15px;
              margin-top:15px;
          }
          .van-cell{
              padding:20px;
          }
          .van-cell__title{
              font-size: 32px;
          }
          .phone-input::-webkit-input-placeholder {
            color:rgba(153,153,153,1);
          }
          .phone-input::-moz-input-placeholder {
            color:rgba(153,153,153,1);
          }
          .phone-input::-ms-input-placeholder {
            color:rgba(153,153,153,1);
          }
          .van-dropdown-menu .van-ellipsis{
            height:70px;
            font-size:50px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:700;
            color:rgba(9,9,9,1);
            line-height:70px;
          }
          .van-dropdown-menu{
              background: none;
              width:150px;
          }
          .van-dropdown-menu__item{
              justify-content:flex-start;
          }
          .van-dropdown-menu__title::after{
              border:none;
          }

      }
      .secondInput{
          margin-top:9px;
          height:78px;
          .code-input{
            border:none;
            outline: none;
            font-size:32px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(9,9,9,1);
            height:76px;
            width:10px;
            flex-grow: 1;
            padding:0 10px;
          }
          .code-text{
            font-size:26px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:76px;
            margin-left:50px;
            flex-shrink: 0;
          }
      }
      .sendCodeButton{
        width:620px;
        height:90px;
        background:rgba(64,205,134,1);
        border-radius:45px;
        margin-top:63px;
        font-size:36px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:90px;
        text-align: center;
      }
      .des{
        font-size:26px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:37px;
      }
      .des1{
          margin-top:22px;
      }
      .wx-login{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top:257px;
          &>img{
            width:96px;
            height:96px;
          }
          &>div{
            height:40px;
            font-size:28px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:40px;
            margin-top:20px;
          }
      }
  }


</style>

