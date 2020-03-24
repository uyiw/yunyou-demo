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
    <div><van-button type="primary" @click="submit">提交</van-button></div>
    <commonBottom :meta="$route.meta.title"></commonBottom>
  </div>
</template>
<script>
import commonNav from '../components/commonNav'
import commonBottom from '../components/commonBottom'
import { Toast } from 'vant';
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

      },
      travelsDetail: {}
    }
  },
  components: {
    commonNav,
    commonBottom
  },
  mounted() {
    if(this.$route.query.id) {
      this.$http.get(this.baseUrl + '/yunchao/travels/details/' + this.$route.query.id).then(res => {
        this.travelsDetail = res.data.jqTravelsResp
        this.travelsDetail.topUrl = res.data.jqTravelsResp.arrImgs[0]
      })
    }
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
        };
      }
    },
    onEditorChange: function(e) {
      this.content = e.html
    },
    submit: function() {
      if(!this.file || (this.$route.query.id && !this.travelsDetail.topUrl)) {
        return Toast.fail('请上传图片');
      }else if(this.file) {
        var formData = new FormData()
        formData.append('pics', this.file)
        this.$http.post(this.baseUrl + '/yunchao/travels/upload', formData, {
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }).then(res => {
          this.imgUrl = res.data.data
          this.submitData();

        })
      }
      if(!this.file && this.travelsDetail.topUrl) {
        this.imgUrl = this.travelsDetail.topUrl;
        this.submitData();
      }
    },
    submitData: function() {
      if(!this.title || !this.title.trim()) {
        return Toast.fail('请输入标题');
      }
      if(!this.content) {
        return Toast.fail('请输入正文');
      }
      var url = '', data = {};
      if(this.$route.query.id) {
        url  = this.baseUrl + '/yunchao/travels/update'
        data = {
          imgs: this.imgUrl,
          info: this.title + '_' +this.content,
          id: this.$route.query.id
        }
      }else {
        url  = this.baseUrl + '/yunchao/travels/add'
        data = {
          imgs: this.imgUrl,
          info: this.title + '_' +this.content
        }
      }
      this.$http.post(url, data, {
        headers: {
          'Cookie': localStorage.getItem('cookie') ? localStorage.getItem('cookie') : ''
        }
      }).then(res => {
        if(res.data.message == '无登录') {
          this.$router.push('/login')
        }
        console.log(res.data)
      })
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/travelsEdit.scss';
</style>

