<template>
  <div id="pay-success">
    <commonNav :navText="navText"></commonNav>
    <div class="pay-success-content">
        <img class="pay-success-icon" src="../assets/img/paySuccess.png" />
        <div class="pay-success-des">购买成功</div>
        <div class="pay-success-button">继续逛逛</div>
    </div>
    
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
export default {
  data() {
    return {
      navText:"购买成功"
    }
  },
  methods:{
    handleChangeTab:function(id){
      id!=this.activeId?this.activeId=id:'';
    }
  },
  components: {
    commonNav
  }
}
</script>
<style lang="scss">
  @import '../assets/css/paySuccess.scss';
</style>

