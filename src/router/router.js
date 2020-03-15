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
      title: 'index'
    }
  },
  {
    path: '/xiangsuDetail',
    name: 'xiangsuDetail',
    component: () => import('@/view/xiangsuDetail')
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
      title: 'travels'
    }
  }
]
