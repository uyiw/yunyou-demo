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
    path: '/',
    name: 'newsList',
    component:  () => import('@/view/newsList'),
    meta: {
      title: 'index'
    }
  },
]
