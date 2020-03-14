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
]
