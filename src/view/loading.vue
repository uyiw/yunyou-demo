<template>
   <div>正在为您跳转…</div>
</template>

<script>
export default {
  mounted () {
    this.$http.get(this.baserUrl + '/yunchao//user/callback?code=' + this.$route.query.code + '&state=' + this.$route.query.state).then(res => {
      if(res.data.data) {
        localStorage.setItem('cookie', res.data.data)
        localStorage.setItem('login', 1)
        this.$router.push('/index')
      }
    })
  }
}
</script>

<style>

</style>
