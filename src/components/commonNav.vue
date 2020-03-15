<template>
  <div class="common-nav-box">
    <div class="common-nav">
        <img v-if="!back" @click="$router.go(-1)" class="common-nav-back" src="../assets/img/back.png" />
        <div class="common-nav-text">{{navText}}</div>
    </div>
  </div>

</template>
<script>
export default {
  props: ['navText', 'back'],
  data() {
    return {
    }
  }
}
</script>
