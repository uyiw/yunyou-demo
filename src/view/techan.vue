<template>
  <div id="techan">
    <commonNav :navText="navText"></commonNav>
    <commonHeader :bannerList="bannerList"></commonHeader>
    <div class="techan-content">
      <div class="techan-select-box">
        <div v-for="(item,index) in selectTag" :key="index" :class="index==activeId?'active':''" @click="handleChangeTab(index)">{{item.text}}</div>
      </div>
      <div class="techan-list-box">
        <div class="techan-item" v-for="(item,index) in techanList" :key="index">
          <img class="techan-item-img" :src="item.img">
          <div class="techan-item-name-box">
            <div>{{item.name}}</div>
            <img src="../assets/img/heart.png" />
          </div>
        </div>
      </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonHeader from '../components/commonHeader'
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      activeId:0,
      navText:'特产',
      selectTag:[{
        text:'热门'
      },{
        text:'土特产'
      },{
        text:'纪念品'
      },{
        text:'工艺品'
      }],
      techanList:[{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        isLike:false
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        isLike:false
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        isLike:false
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        isLike:false
      },{
        img:require('@/assets/img/2.png'),
        name:'归心精品小院',
        isLike:false
      }]
    }
  },
  methods:{
    handleChangeTab:function(id){
      id!=this.activeId?this.activeId=id:'';
    }
  },
  components: {
    commonHeader,
    commonNav,
    commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/techan.scss';
</style>

