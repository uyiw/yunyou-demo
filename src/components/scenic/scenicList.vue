<template>
  <div class="scenicList">
    <div v-for="(item, index) in scenicList" :key="index">
      <img :src="item.url" />
      <h3>{{ item.title }}</h3>
      <p><img src="../../assets/img/16.png" /> {{ item.address }}</p>
      <div class="scenicList-con">{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tab'],
  data() {
    return {
      scenicList: [
        {
          url: require('@/assets/img/34.png'),
          title: '三瓜公社',
          address: '合肥巢湖半塘街道三瓜公社',
          content: '人民网巢湖4月18日电 (记者 张磊)“真的很想在这里安心住下来，体验一回地道的农民。”在安徽巢湖“三瓜公社”，来自北京的韩旭娇逛了冬瓜民俗村，品了村口农家乐，赏了漫山郁金香，临别时还是对这儿的田园农'
        },
        {
          url: require('@/assets/img/34.png'),
          title: '三瓜公社',
          address: '合肥巢湖半塘街道三瓜公社',
          content: '人民网巢湖4月18日电 (记者 张磊)“真的很想在这里安心住下来，体验一回地道的农民。”在安徽巢湖“三瓜公社”，来自北京的韩旭娇逛了冬瓜民俗村，品了村口农家乐，赏了漫山郁金香，临别时还是对这儿的田园农'
        },
      ]
    }
  }
}
</script>

