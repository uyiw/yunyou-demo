<template>
  <div id="travelsEdit">
    <commonNav :navText="navText"></commonNav>
    <div class="travelsEdit-img" @click="chooseImage()">
      <div v-if="!fenmian">
        <img src="../assets/img/02.png" />
        <span>添加游记封面</span>
      </div>
      <input type="file" accept="image/*" id="file" @change="onChangeClick" />
      <img v-if="fenmian" :src="fenmian" />
    </div>
    <van-field v-model="title" placeholder="编辑游记主题" />
    <div class="editor">
      <quill-editor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @change="onEditorChange($event)">
      </quill-editor>
    </div>
    <div><van-button type="primary">提交</van-button></div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
export default {
  data() {
    return {
      navText: '游记编辑页',
      file: '',
      fenmian: '',
      title: '',
      content: '',
      editorOption: {
        placeholder: '编辑游记正文',
        modules:{
          toolbar:[
            ['bold', 'italic', 'underline'],    //加粗，斜体，下划线，删除线
            [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
            [{ 'align': [] }],    //对齐方式
            ['clean'],    //清除字体样式
            ['image','video']    //上传图片、上传视频
          ]
        }

      }
    }
  },
  components: {
    commonNav,
    commonBottom
  },
  methods: {
    chooseImage() {
      var file = document.getElementById('file')
      file.click();
    },
    onChangeClick: function(e) {
      var _this = this;
      var file = e.target.files[0];
      this.file=file;
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = (e) => {
          // _this.imgSrc=e.target.result
          this.fenmian = e.target.result
          alert(this.fenmian)
        };
      }
    },
    onEditorChange: function(e) {
      console.log(e)
    },
  }
}
</script>
<style lang="scss">
  @import '../assets/css/travelsEdit.scss';
</style>

