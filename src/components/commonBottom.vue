<template>
  <div class="common-bottom">
    <router-link tag="div" :to="item.url" v-for="(item, index) in tabList" :key="index">
      <img :src="meta == item.meta ? item.iconIndex: item.icon" />
      <p>{{ item.title }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['meta'],
  data() {
    return {
      tabList: [
        {
          meta: 'index',
          icon: require('@/assets/img/index.png'),
          iconIndex: require('@/assets/img/index_g.png'),
          title: '首页',
          url: '/'
        },
        {
          meta: 'njb',
          icon: require('@/assets/img/njb.png'),
          iconIndex: require('@/assets/img/njb_g.png'),
          title: '农家帮',
          url: '/xiangsu'
        },
        {
          meta: 'travels',
          icon: require('@/assets/img/yj.png'),
          iconIndex: require('@/assets/img/yj_g.png'),
          title: '游记',
          url: '/travels'
        },
        {
          meta: 'wode',
          icon: require('@/assets/img/wode.png'),
          iconIndex: require('@/assets/img/wode_g.png'),
          title: '我的',
          url: '/my'
        },
      ]
    }
  }
}
</script>


