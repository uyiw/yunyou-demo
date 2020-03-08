<template>
  <div class="common-point-title-box" :style="!isPadding?{paddingTop:0}:{}">
    <div class="common-point"></div>
    <div class="common-point-title">{{text}}</div>
  </div>
  
</template>
<script>
export default {
  props:{
      text:{
          type:String,
          default:'详情介绍'
      },
      isPadding:{
          type:Boolean,
          default:true
      }
  },
  data() {
    return {
    }
  }
}
</script>
