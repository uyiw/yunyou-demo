<template>
  <div id="food">
    <commonNav :navText="navText"></commonNav>
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
import commonNav from '../components/commonNav'
import selectTag from '../components/common/selectTag'
import commonBottom from '../components/commonBottom'
import foodList from '../components/food/foodList'
export default {
  data() {
    return {
      navText: '人气美食',
      selectTag:[{
        text:'全部景区',
        items: []
      },{
        text:'推荐排序',
        items: [
          {
            scenicName: '最新',
            areaCode: '1'
          },
          {
            scenicName: '最热',
            areaCode: '2'
          },
        ]
      }],
      tab: 0
    }

  },
  components: {
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
