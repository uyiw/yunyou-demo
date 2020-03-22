<template>
  <div id="youji">
    <commonNav :navText="navText"></commonNav>
    <div class="youji-content">
        <div class="youji-item" v-for="(item,index) in dataList" :key="index">
            <div class="youji-images-box">
                <img v-for="(item1,index1) in item.images" :key="index1" :src="item1" />
            </div>
            <div class="youji-title">{{item.title}}</div>
            <div class="youji-des">{{item.des}}</div>
        </div>
    </div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonBottom from '../components/commonBottom'
import commonNav from '../components/commonNav'
export default {
  data() {
    return {
      navText:'我的游记',
      dataList:[{
          images:[require("../assets/img/2.png"),require("../assets/img/2.png"),require("../assets/img/2.png")],
          title:'#西安最省钱的旅游地',
          des:'四季花海位于北京市延庆县的四海镇，青山绿水间，数千亩鲜花铺展开来，姹紫嫣红，农田变花园。继百里山水画廊之后，延庆县又一条市级示范沟域…'
      },{
          images:[require("../assets/img/2.png"),require("../assets/img/2.png"),require("../assets/img/2.png")],
          title:'#西安最省钱的旅游地',
          des:'四季花海位于北京市延庆县的四海镇，青山绿水间，数千亩鲜花铺展开来，姹紫嫣红，农田变花园。继百里山水画廊之后，延庆县又一条市级示范沟域…'
      },{
          images:[require("../assets/img/2.png"),require("../assets/img/2.png"),require("../assets/img/2.png")],
          title:'#西安最省钱的旅游地',
          des:'四季花海位于北京市延庆县的四海镇，青山绿水间，数千亩鲜花铺展开来，姹紫嫣红，农田变花园。继百里山水画廊之后，延庆县又一条市级示范沟域…'
      }]
    }
  },
  methods:{
  },
  components: {
    commonNav,
    commonBottom
  }
}
</script>
<style lang="scss">
  @import '../assets/css/myYouji.scss';
  .youji-content{
      width:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 30px;
      .youji-item{
          width:680px;
          padding: 30px 0;
          border-bottom: 2px solid rgba(230,230,230,1);
          .youji-images-box{
              width:100%;
              display: flex;
              align-items:center;
              &>img{
                  width:200px;
                  height:200px;
                  margin-left:40px;
              }
              &>img:nth-of-type(1){
                  margin-left:0px;
              }
          }
          .youji-title{
            font-size:30px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(45,45,45,1);
            line-height:42px;
            width:100%;
            margin-top:34px;
          }
          .youji-des{
            font-size:26px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(45,45,45,1);
            line-height:37px;
            margin-top:10px;
          }
      }
  }
</style>

