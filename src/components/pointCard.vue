<template>
  <div class="common-point-card-box">
    <pointTitle></pointTitle>
    <div class="common-point-card-content"></div>
  </div>
</template>
<script>
import pointTitle from '../components/pointTitle'
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
  },
  components: {
    pointTitle,
  }
}
</script>
