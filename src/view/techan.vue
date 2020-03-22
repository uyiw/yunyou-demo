<template>
  <div id="techan">
    <commonNav :navText="navText" ></commonNav>
    <commonHeader :bannerList="bannerList" :areaId.sync="areaId" @update:areaId="areaId = $event" @searchClick="searchClick"></commonHeader>
    <div class="techan-content">
      <div class="techan-select-box">
        <div v-for="(item,index) in selectTag" :key="index" :class="item.id == activeId?'active':''" @click="handleChangeTab(item.id)">{{item.text}}</div>
      </div>
      <div class="techan-list-box">
        <div class="techan-item" v-for="(item,index) in techanList" :key="index" @click="goToDetail(item.id)">
          <img class="techan-item-img" :src="baseUrl + item.imageUrls">
          <div class="techan-item-name-box">
            <div>{{item.name}}</div>
            <img :src="item.flag ? require('@/assets/img/like.png') : require('@/assets/img/noLike.png')" />
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
      activeId:1,
      areaId: '',
      navText:'特产',
      value: '',
      selectTag:[{
        text:'热门',
        id: 1,
      },{
        text:'土特产',
        id: 2,
      },{
        text:'纪念品',
        id: 3,
      },{
        text:'工艺品',
        id: 4,
      }],
      techanList:[]
    }
  },
  watch: {
    areaId: function(newVal, oldVal) {
      if(newVal) {
        this.getData();
      }
    }
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/specialty/rotation').then(res => {
      this.bannerList = res.data
    })
    // this.$http.get(this.baseUrl + '/yunchao/specialty/rotation').then(res => {
    //   this.bannerList = res.data
    // })
  },
  methods:{
    handleChangeTab:function(id){
      id!=this.activeId?this.activeId=id:'';
       this.getData();
    },
    getData: function() {
      this.$http.get(this.baseUrl + '/yunchao/specialty/search/1/10?areaId='+ this.areaId +'&type=' + this.activeId + '&queryStr=' + this.value).then(res => {
        if(res.data.data && res.data.data.length > 0) {
          this.techanList = res.data.data
        }else {
          this.techanList = []
        }
      })
    },
    searchClick: function(data) {
      this.value = data
      this.getData();
    },
    goToDetail: function(index) {
      this.$router.push('/techanDetail?id=' + index)
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

