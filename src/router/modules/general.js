// import Layout from '@/layout'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    component: () => import('@v/Home.vue'),
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    }
  }
]
