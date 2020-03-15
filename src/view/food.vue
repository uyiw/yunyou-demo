<template>
  <div id="food">
    <commonNav :navText="navText"></commonNav>
    <commonHeader :bannerList="bannerList" :height="true"></commonHeader>
    <div class="food-tab clearfix">
      <router-link to="" tag="div" class="pull-left">
        <img src="../assets/img/21.png" />
        <p class="tip">人气美食</p>
      </router-link>
      <div class="pull-left">
        <router-link to="" tag="p" class="pull-left">
          <img src="../assets/img/22.png" />
          <span class="tip">乡村美食</span>
        </router-link>
        <router-link to="" tag="p" class="pull-left">
          <img src="../assets/img/23.png" />
          <span class="tip">西安特色</span>
        </router-link>
      </div>
    </div>
    <div class="food-content">
      <div class="xiangsu-select-box">
        <selectTag v-for="(item,index) in selectTag" :key="index" :isFirst="index==0" :items="item.items" :text="item.text"></selectTag>
      </div>
      <div class="food-list">
        <foodList :tab="tab"></foodList>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<<script>
import commonHeader from '../components/commonHeader'
import commonNav from '../components/commonNav'
import selectTag from '../components/common/selectTag'
import commonBottom from '../components/commonBottom'
import foodList from '../components/food/foodList'
export default {
  data() {
    return {
      navText: '餐饮',
      bannerList: [require('@/assets/img/3.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/3.png')
      ],
      selectTag:[{
        text:'全部景区',
        items:[]
      },{
        text:'推荐排序',
        items:[]
      }],
      tab: 0,
    }

  },
  components: {
    commonHeader,
    commonNav,
    commonBottom,
    selectTag,
    foodList
  }
}
</script>
<style lang="scss">
  @import '../assets/css/food.scss';
</style>
