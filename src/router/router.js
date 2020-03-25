export default[
  {
    path: '/',
    name: 'index',
    component:  () => import('@/view/index'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/newsList',
    name: 'newsList',
    component:  () => import('@/view/newsList'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/xiangsu',
    name: 'xiangsu',
    component: () => import('@/view/xiangsu'),
    meta: {
      title: 'njb'
    }
  },
  {
    path: '/xiangsuDetail',
    name: 'xiangsuDetail',
    component: () => import('@/view/xiangsuDetail'),
    meta: {
      title: 'njb'
    }
  },
  {
    path: '/techan',
    name: 'techan',
    component: () => import('@/view/techan'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/techanDetail',
    name: 'techanDetail',
    component: () => import('@/view/techanDetail')
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('@/view/food'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/foodList',
    name: 'foodList',
    component: () => import('@/view/foodList'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/foodDetail',
    name: 'foodDetail',
    component: () => import('@/view/foodDetail'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/scenic',
    name: 'scenic',
    component: () => import('@/view/scenic'),
    meta: {
      title: 'index'
    }
  },{
    path: '/scenicList',
    name: 'scenicList',
    component: () => import('@/view/scenicList'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/scenicDetail',
    name: 'scenicDetail',
    component: () => import('@/view/scenicDetail'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import('@/view/attractions'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/travels',
    name: 'travels',
    component: () => import('@/view/travels'),
    meta: {
      title: 'travels'
    }
  },
  {
    path: '/travelsDetail',
    name: 'travelsDetail',
    component: () => import('@/view/travelsDetail'),
    meta: {
      title: 'travels'
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
    component: () => import('@/view/paySuccess')
  },
  {
    path: '/paytotal',
    name: 'paytotal',
    component: () => import('@/view/payTotal')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/view/my'),
    meta: {
      title: 'wode'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/view/message'),
    meta: {
      title: 'wode'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/view/order'),
    meta: {
      title: 'wode'
    }
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: () => import('@/view/newsDetail'),
    meta: {
      title: 'index'
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
    path: '/login',
    name: 'login',
    component: () => import('@/view/login')
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
