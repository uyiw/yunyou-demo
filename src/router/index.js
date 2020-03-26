import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)


const router = new Router({
  routes:routes,
})
router.beforeEach((to, from, next) => {
  if(to.meta.logined) {
    if(localStorage.getItem('login') == 0) {
      next('/')
    }else {
      next();
    }
  }else {
    next();
  }
})
export default router
