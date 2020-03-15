<template>
  <div id="travelsDetail">
    <commonNav :navText="navText"></commonNav>
    <img :src="travelsDetail.topUrl" />
    <div class="travelsDetail-content">
      <h2>{{ travelsDetail.remark }}</h2>
      <div class="travelsDetail-con-top">
        <img :src="travelsDetail.headUrl" />
        <span>{{ travelsDetail.name }}</span>
      </div>
      <div class="travelsDetail-con-intro">
        <div>
          <img src="../assets/img/45.png" />
          <p>{{ travelsDetail.time }}</p>
          <p>出游日期</p>
        </div>
        <div>
          <img src="../assets/img/42.png" />
          <p>{{ travelsDetail.day }}</p>
          <p>出行天数</p>
        </div>
        <div>
          <img src="../assets/img/43.png" />
          <p>{{ travelsDetail.person }}</p>
          <p>出行人数</p>
        </div>
        <div>
          <img src="../assets/img/44.png" />
          <p>￥{{ travelsDetail.price }}</p>
          <p>人均消费</p>
        </div>
      </div>
      <div class="travelsDetail-con-con" v-html="travelsDetail.content"></div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
import utils from '../assets/js/utils'
export default {
  data() {
    return {
      navText: '详情',
      travelsDetail: {
        topUrl: require('@/assets/img/08.png'),
        remark: '周末闲暇时，不如到昆明走一趟，过慢走浅右的生活。',
        headUrl: require('@/assets/img/head.jpg'),
        name: '帅到没朋友',
        time: '2019.06.19',
        day: 1,
        person: 2,
        price: 200,
        content: '<p style="font-size:26px;font-weight:400;color:rgba(45,45,45,1);line-height:37px;">四季花海位于北京市延庆县的四海镇，青山绿水间，数千亩鲜花铺展开来，姹紫嫣红，农田变花园。继百里山水画廊之后，延庆县又一条市级示范沟域--四季花海规模初显，8200亩鲜花陆续绽放，成为京郊景观农业的新样本。</p><img style="margin: 20px 0;width: 100%;" src="'+ require('@/assets/img/09.png') +'" />'
      }
    }
  },
  components: {
    commonNav,
    commonBottom
  },
  mounted() {
    this.travelsDetail.content = utils.pxToRem(this.travelsDetail.content)
  }
}
</script>
<style lang="scss">
  @import '../assets/css/travelsDetail.scss';
</style>

