// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import Vant from 'vant/lib/vant.js'
import 'vant/lib/index.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueQuillEditor from 'vue-quill-editor'
import VueResource from 'vue-resource';
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
Vue.use(VueAwesomeSwiper)　
Vue.use(VueResource);

Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.baseUrl = process.env.NODE_ENV === 'production'? '':'/api';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
