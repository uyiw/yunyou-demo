<template>
  <div class="common-select" :style="isFirst?{marginLeft:0}:{}">
    <div class="common-select-text">{{text}}</div>
    <div class="common-select-icon">
      <img src="../../assets/img/down.png" />
    </div>
  </div>
</template>
<script>
export default {
  props:{
      text:{
          type:String,
          default:'请选择'
      },
      isFirst:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
.common-select{
    width:200px;
    height:50px;
    background:rgba(255,209,81,1);
    border-radius:2px;
    margin-left:35px;
    display:flex;
    border-radius:2px;
    .common-select-text{
      width:150px;
      height:50px;
      text-align:center;
      line-height:50px;
      font-size:30px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
    .common-select-icon{
      width:50px;
      height:50px;
      background:rgba(255,171,26,1);
      border-radius:2px;
      display:flex;
      justify-content:center;
      &>img{
        width:28px;
        height:27px;
        margin-top:5px;
      }
    }
}
</style>

