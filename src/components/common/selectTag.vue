<template>
  <div class="common-select" :style="isFirst?{marginLeft:0}:{}">
    <div class="common-select-text"  @click="showClick">{{text}}</div>
    <div class="common-select-icon" @click="showClick">
      <img src="../../assets/img/down.png" />
    </div>
    <div class="showAll" v-if="show">
      <ul v-show="text == '全部景区'" v-if="items && items.length > 0">
        <li @click="chooseClick(item1.id)" v-for="(item1, index1) in items" :class="{'choose': scenicSpotAreaId == item1.id}" :key="index1">{{ item1.scenicName }}</li>
      </ul>
      <ul v-show="text == '推荐排序'" v-if="items && items.length > 0">
        <li @click="chooseClick1(item1.areaCode)" v-for="(item1, index1) in items" :class="{'choose': choose == item1.areaCode}" :key="index1">{{ item1.scenicName }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:['text', 'isFirst', 'items'],
  data() {
    return {
      scenicSpotAreaId: '',
      show: false,
      choose: ''
    }
  },
  methods: {
    showClick: function() {
      this.show = !this.show
    },
    chooseClick: function(index) {
      this.scenicSpotAreaId = index;
      this.show = false;
      this.$parent.$emit('changeAreaId', index)
    },
    chooseClick1: function(index) {
      this.choose = index;
      this.show = false;
      this.$parent.$emit('changePai', index)
    }
  }
}
</script>
<style lang="scss">
.common-select{
    width:200px;
    height:50px;
    background:rgba(255,209,81,1);
    border-radius:2px;
    margin-left:35px;
    display:flex;
    border-radius:2px;
    position: relative;
    .showAll {
      width: 100%;
      position: absolute;
      top: 50px;
      line-height:50px;
      font-size:26px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(0,0,0,1);
      text-align: center;
      z-index: 10;
      background:rgba(255,209,81,1);
      ul {
        li.choose {
          color: #fff;
        }
      }
    }
    .common-select-text{
      width:150px;
      height:50px;
      text-align:center;
      line-height:50px;
      font-size:30px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
    .common-select-icon{
      width:50px;
      height:50px;
      background:rgba(255,171,26,1);
      border-radius:2px;
      display:flex;
      justify-content:center;
      &>img{
        width:28px;
        height:27px;
        margin-top:5px;
      }
    }
}
</style>

