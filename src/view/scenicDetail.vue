<template>
  <div class="scenicDetail">
    <commonNav :navText="navText"></commonNav>
    <commonSwiper :bannerList="bannerList"></commonSwiper>
    <div class="scenicDetail-context">
      <h3>{{ scenicDetail.name }}</h3>
      <p><img src="../assets/img/35.png" /> {{ scenicDetail.address }}</p>
      <div class="scenicDetail-context-con" v-html="scenicDetail.info"></div>
      <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">区域内景点</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenicDetail.scenic" :key="index">
            <img :src="baseurl + url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>查看全部</p>
      </div>
      <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">区域内餐饮</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenicDetail.scenic" :key="index">
            <img :src="baseurl + url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>查看全部</p>
      </div>
      <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">区域内乡宿</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenicDetail.scenic" :key="index">
            <img :src="baseurl + url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>查看全部</p>
      </div>
      <div class="scenicDetail-scenic">
        <div class="common-point-title-box" style="padding-top: 0px;">
          <div class="common-point"></div> <div class="common-point-title">土特产</div>
        </div>
        <div class="scenicDetail-scenic-list">
          <div v-for="(item, index) in scenicDetail.scenic" :key="index">
            <img :src="baseurl + url" />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>查看全部</p>
      </div>
    </div>

    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>

<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
import commonSwiper from '../components/common/commonSwiper'
export default {
  data() {
   return {
      navText: '详情',
      bannerList: [
        require('@/assets/img/2.png'),
        require('@/assets/img/banner1.png'),
        require('@/assets/img/2.png')
      ],
      scenicDetail: {
        title: '三瓜公社',
        address: '合肥巢湖半塘街道三瓜公社',
        content: '人民网巢湖4月18日电 (记者 张磊)“真的很想在这里安心住下来，体验一回地道的农民。”在安徽巢湖“三瓜公社”，来自北京的韩旭娇逛了冬瓜民俗村，品了村口农家乐，赏了漫山郁金香，临别时还是对这儿的田园农',
        scenic: []
      }
   }
  },
  components: {
    commonSwiper,
    commonNav,
    commonBottom
  },
  mounted() {
    this.$http.get(this.baseUrl + '/yunchao/scenic/search/1/10?scenicSpotAreaId=' + this.$route.query.areaId).then(res => {
      res.data.data.forEach(element => {
        this.scenicDetail.scenic.push({
          name: element.name,
          url: element.arrImgs[0]
        })
      });
    })
  }

}
</script>

<style lang="scss">
  @import '../assets/css/scenicDetail.scss';
</style>
