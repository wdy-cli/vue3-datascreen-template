// import { HOME_URL } from '@/config'

/**
 * staticRouter (静态路由)
 */
export const staticRouter = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '首页',
      icon: 'House'
    }
  },
  {
    path: '/demo/scale-demo',
    name: 'scale-demo',
    component: () => import('@/views/demo/scale-demo.vue'),
    meta: {
      title: '首页',
      icon: 'House'
    }
  },
  {
    path: '/demo/scale-demo2',
    name: 'scale-demo2',
    component: () => import('@/views/demo/scale-demo2.vue'),
    meta: {
      title: '首页',
      icon: 'House'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    redirect: '/demo/demo1',
    component: () => import('@/views/demo/index.vue'),
    meta: {
      title: 'Demo',
      icon: 'House'
    },
    children: [
      {
        path: '/demo/demo1',
        name: 'Demo1',
        meta: {
          title: 'demo1',
          keepAlive: true
        },
        component: () => import('@/views/demo/demo1/index.vue')
      },
      {
        path: '/demo/demo2',
        name: 'Demo2',
        meta: {
          title: 'demo2',
          keepAlive: true
        },
        component: () => import('@/views/demo/demo2/index.vue')
      },
      {
        path: '/demo/demo3',
        name: 'Demo3',
        meta: {
          title: 'demo3',
          keepAlive: true
        },
        component: () => import('@/views/demo/demo3/index.vue')
      }
    ]
  }
]
