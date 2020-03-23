<template>
  <div class="common-hotel-item" :style="isEnd?{bodderBottom:'none'}:{}" @click="goToDetail(hotelItem.id)">
    <img :src="baseUrl + hotelItem.img" class="common-hotel-item-img"/>
    <div class="common-hotel-item-right">
        <div class="common-hotel-item-right-name">{{hotelItem.name}}</div>
        <div class="common-hotel-item-right-star">
            <div class="common-hotel-item-right-star-title">评分:</div>
            <van-rate
                v-model="hotelItem.star"
                allow-half
                void-icon="star"
                void-color="#eee"
            />
            <div class="common-hotel-item-right-star-number"><span>{{hotelItem.star.toFixed(1)}}</span>分</div>
        </div>
        <div class="common-hotel-item-right-dis">{{hotelItem.dis}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
      hotelItem:{
          type:Object,
          default:{}
      },
      isEnd:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    goToDetail: function(id) {
      this.$router.push('/xiangsuDetail?id=' + id)
    }
  },
}
</script>
<style lang="scss">
.common-hotel-item{
    width:100%;
    padding:10px 0;
    border-bottom:1px solid rgba(238,238,238,1);
    display:flex;
    align-items:center;
    justify-content:space-between;
    .common-hotel-item-img{
        width:240px;
        height:160px;
    }
    .common-hotel-item-right{
        width:419px;
        display:flex;
        flex-direction:column;
        .common-hotel-item-right-name{
            height:50px;
            font-size:36px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(52,52,52,1);
            line-height:50px;
        }
        .common-hotel-item-right-star{
            width:100%;
            display:flex;
            align-items:center;
            margin-top:2px;
            margin-bottom:2px;
            .common-hotel-item-right-star-title{
                height:42px;
                font-size:30px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(113,182,48,1);
                line-height:42px;
                margin-right:10px;
            }
            .common-hotel-item-right-star-number{
                margin-left:32px;
                height:40px;
                font-size:28px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(255,104,0,1);
                line-height:40px;
                &>span{
                    font-size:36px;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    line-height:50px;
                    margin-right:2px;
                }
            }
            .van-rate__icon{
                font-size:28px
            }
        }
        .common-hotel-item-right-dis{
            height:33px;
            font-size:24px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(118,118,118,1);
            line-height:33px;
        }
        .common-hotel-item-right-name,.common-hotel-item-right-dis{
            width:100%;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }

}
</style>
