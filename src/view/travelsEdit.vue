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
            ['image']    //上传图片、上传视频
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
        this.title = res.data.jqTravelsResp.info.split('_')[0]
        this.content = res.data.jqTravelsResp.info.split('_')[1]
        this.fenmian = res.data.jqTravelsResp.arrImgs[0]
      })
    }
  },
  methods: {
    dataURLtoFile: function(dataurl, filename) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
      while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
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
      var img = e.html.indexOf('base64') !=  -1 ? e.html.split('src="')[1].split('"')[0] : '';
      this.content = e.html
    },
    submit: function() {
      if(!this.file && (this.$route.query.id && !this.fenmian)) {
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
      if(!this.file && this.fenmian) {
        this.imgUrl = this.fenmian;
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
        url  = this.baseUrl + '/yunchao/travels/update?token=' + localStorage.getItem('cookie')
        data = {
          imgs: this.imgUrl,
          info: this.title + '_' +this.content,
          id: this.$route.query.id,
        }
        this.$http.put(url, data).then(res => {
          if(res.data.message == '无登录') {
            this.$router.push('/')
          }else if(res.data.message == '操作成功') {
            Toast.success('修改成功')
            var time = setTimeout(() => {
              clearTimeout(time);
              this.$router.push('/travels')
            }, 500)
          }
        })
      }else {
        url  = this.baseUrl + '/yunchao/travels/add?token=' + localStorage.getItem('cookie')
        data = {
          imgs: this.imgUrl,
          info: this.title + '_' +this.content,
          area: JSON.parse(localStorage.getItem('area')).areaId
        }
        this.$http.post(url, data).then(res => {
          if(res.data.message == '无登录') {
            this.$router.push('/')
          }else if(res.data.message == '操作成功') {
            Toast.success('添加成功')
            var time = setTimeout(() => {
              clearTimeout(time);
              this.$router.push('/travels')
            }, 500)
          }
        })
      }

    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/travelsEdit.scss';
</style>

