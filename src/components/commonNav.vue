<template>
  <div class="common-nav-box">
    <div class="common-nav">
        <img v-if="!back" @click="goTo" class="common-nav-back" src="../assets/img/back.png" />
        <div class="common-nav-text">{{navText}}</div>
    </div>
  </div>

</template>
<script>
export default {
  props: ['navText', 'back', 'needM'],
  data() {
    return {
    }
  },
  methods: {
    goTo() {
      if(this.needM) {
        this.$emit('chooseM')
      }else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
