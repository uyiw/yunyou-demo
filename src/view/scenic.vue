<template>
  <div id="scenic">
    <commonNav :navText="navText"></commonNav>
    <commonHeader :bannerList="bannerList" :height="true"></commonHeader>
    <div class="scenic-tab clearfix">
      <router-link to="" tag="span">热门推荐</router-link>
      <router-link to="" tag="span">人气乡村</router-link>
    </div>
    <div class="scenic-content">
      <div class="xiangsu-select-box">
        <selectTag v-for="(item,index) in selectTag" :key="index" :isFirst="index==0" :items="item.items" :text="item.text"></selectTag>
      </div>
      <div class="scenic-list">
        <scenicList :tab="tab"></scenicList>
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
import scenicList from '../components/scenic/scenicList'
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
    scenicList
  }
}
</script>
<style lang="scss">
  @import '../assets/css/scenic.scss';
</style>
