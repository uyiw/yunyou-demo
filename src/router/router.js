export default[
  {
    path: '/',
    name: 'login',
    component: () => import('@/view/login'),
    meta: {
      logined: false
    }
  },
  {
    path: '/index',
    name: 'index',
    component:  () => import('@/view/index'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/newsList',
    name: 'newsList',
    component:  () => import('@/view/newsList'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/xiangsu',
    name: 'xiangsu',
    component: () => import('@/view/xiangsu'),
    meta: {
      title: 'njb',
      logined: true
    }
  },
  {
    path: '/xiangsuDetail',
    name: 'xiangsuDetail',
    component: () => import('@/view/xiangsuDetail'),
    meta: {
      title: 'njb',
      logined: true
    }
  },
  {
    path: '/techan',
    name: 'techan',
    component: () => import('@/view/techan'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/techanDetail',
    name: 'techanDetail',
    component: () => import('@/view/techanDetail'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('@/view/food'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/foodList',
    name: 'foodList',
    component: () => import('@/view/foodList'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/foodDetail',
    name: 'foodDetail',
    component: () => import('@/view/foodDetail'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/scenic',
    name: 'scenic',
    component: () => import('@/view/scenic'),
    meta: {
      title: 'index',
      logined: true
    }
  },{
    path: '/scenicList',
    name: 'scenicList',
    component: () => import('@/view/scenicList'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/scenicDetail',
    name: 'scenicDetail',
    component: () => import('@/view/scenicDetail'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import('@/view/attractions'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/travels',
    name: 'travels',
    component: () => import('@/view/travels'),
    meta: {
      title: 'travels',
      logined: true
    }
  },
  {
    path: '/travelsDetail',
    name: 'travelsDetail',
    component: () => import('@/view/travelsDetail'),
    meta: {
      title: 'travels',
      logined: true
    }
  },
  {
    path: '/travelsEdit',
    name: 'travelsEdit',
    component: () => import('@/view/travelsEdit'),
    meta: {
      title: 'travels',
      logined: true
    }
  },
  {
    path: '/paysuccess',
    name: 'paysuccess',
    component: () => import('@/view/paySuccess'),
    meta: {
      logined: true
    }
  },
  {
    path: '/paytotal',
    name: 'paytotal',
    component: () => import('@/view/payTotal'),
    meta: {
      logined: true
    }

  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/view/my'),
    meta: {
      title: 'wode',
      logined: true
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/view/message'),
    meta: {
      title: 'wode',
      logined: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/view/order'),
    meta: {
      title: 'wode',
      logined: true
    }
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: () => import('@/view/newsDetail'),
    meta: {
      title: 'index',
      logined: true
    }
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('@/view/myCollection'),
    meta: {
      title: 'wode',
      logined: true
    }
  },
  {
    path: '/myyouji',
    name: 'myyouji',
    component: () => import('@/view/myYouji'),
    meta: {
      title: 'wode',
      logined: true
    }
  },
]
