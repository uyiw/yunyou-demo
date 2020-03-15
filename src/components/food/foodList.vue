<template>
  <div id="foodList">
    <div v-for="(item, index) in foodList" :key="index" class="clearfix">
      <img :src="item.imgUrl" class="pull-left" />
      <div class="pull-left">
        <h3>{{ item.title }}</h3>
        <p>
          <img src="../../assets/img/16.png" />
          <span>{{ item.address }}</span>
        </p>
        <p>
          <img src="../../assets/img/17.png" />
          <span>{{ item.phone }}</span>
        </p>
        <div>
          <span>{{ item.num }}+</span>
          <img src="../../assets/img/19.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tab'],
  data() {
    return {
      foodList: [
        {
          imgUrl: require('@/assets/img/food.png'),
          title: '月贝山珍坊',
          address: '白朝乡月贝村4号',
          phone: '15689456899',
          num: 99
        },
        {
          imgUrl: require('@/assets/img/food.png'),
          title: '月贝山珍坊',
          address: '白朝乡月贝村4号',
          phone: '15689456899',
          num: 99
        },
      ]
    }
  }
}
</script>
