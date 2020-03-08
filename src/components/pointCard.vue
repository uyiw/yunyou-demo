<template>
  <div class="common-point-card-box">
    <pointTitle :isPadding="isPadding" :text="text"></pointTitle>
    <div class="common-point-card-content" :show="content!=''">{{content}}</div>
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
      },
      content:{
          type:String,
          default:''
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
