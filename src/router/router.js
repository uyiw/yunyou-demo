export default[
  {
    path: '/',
    name: 'index',
    component:  () => import('@/view/index')
  },{
    path: '/xiangsu',
    name: 'xiangsu',
    component: () => import('@/view/xiangsu')
  },{
    path: '/xiangsuDetail',
    name: 'xiangsuDetail',
    component: () => import('@/view/xiangsuDetail')
  }
]
