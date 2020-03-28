<template>
  <div v-if="visibale" class="toast-box">
    <div class="toast-mask" @click="maskClose1">
        <div class="toast-content" @click="prevent">
            <div class="toast-content-content">
                <div class="toast-title-box" v-if="showTitle">
                    <div>{{toastTitle}}</div>
                    <div @click="hideToast"><img v-if="showClose" src="../../assets/img/close.png"  /></div>
                </div>
                <div class="toast-text-box">{{text}}</div>
            </div>
            <div class="toast-button-box">
                <div class="total-cancel" @click="cancelFn1">{{cancelText}}</div>
                <div class="total-sure" @click="sureFn1">{{sureText}}</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import car from "./car"
export default {
  props:{
      cancelText:{
          type:String,
          default:'再想想'
      },
      cancelFn:{
          default:''
      },
      sureFn:{
          default:''
      },
      sureText:{
          type:String,
          default:'确定'
      },
      toastTitle:{
          type:String,
          default:'温馨提示'
      },
      maskClose:{
          type:Boolean,
          default:true,
      },
      showTitle:{
          type:Boolean,
          default:true
      },
      showClose:{
          type:Boolean,
          default:true
      },
      text:{
          type:String,
          default:'你确定不买了吗？'
      }
  },
  data() {
    return {
        visibale:true
    }
  },
  methods:{
      cancelFn1:function(){
          this._props.cancelFn==""?this.hideToast():this.props.cancelFn()
      },
      sureFn1:function(){
          // this._props.sureFn==""?this.hideToast():this.props.sureFn()
          this.$router.go(-1)
      },
      maskClose1:function(){
          this._props.maskClose==false?'':this.hideToast()
      },
      showToast:function(){
          this.visibale=true;
      },
      hideToast:function(){
          this.visibale=false
          this.$emit('backOrder')
      },
      prevent:function(event){
          event.stopPropagation?event.stopPropagation():'';
          event.cancelBubble?event.cancelBubble=true:''
      }
  },
  components:{
  }
}
</script>
<style lang="scss">
  .toast-box{
    width:100%;
    height:100%;
    position:fixed;
    left:0px;
    top:0px;
    z-index:10000;
    background:rgba(0,0,0,0.49);
    .toast-mask{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        .toast-content{
            width:662px;
            display:flex;
            flex-direction:column;
            background:rgba(255,255,255,1);
            border-radius:8px;
            .toast-content-content{
                width:100%;
                padding:30px 40px 38px;
                .toast-title-box{
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-bottom:25px;
                    font-size:32px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(45,45,45,1);
                    line-height:45px;
                    &>div>img{
                        width:31px;
                        height:31px;
                    }
                }
                .toast-text-box{
                    font-size:40px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(45,45,45,1);
                    line-height:56px;
                }
            }
            .toast-button-box{
                border-top:2px solid rgba(216,216,216,1);
                width:100%;
                height:102px;
                display:flex;
                .total-cancel{
                    width:50%;
                    height:100px;
                    border-right:1px solid rgba(216,216,216,1);
                    font-size:30px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(45,45,45,1);
                    line-height:100px;
                    text-align:center;
                }
                .total-sure{
                    width:50%;
                    height:100px;
                    border-left:1px solid rgba(216,216,216,1);
                    font-size:30px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,165,76,1);
                    line-height:100px;
                    text-align:center;
                }
            }
        }
    }
  }
</style>
