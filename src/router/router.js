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
  }
]
