/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:29:20
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-20 19:27:50
 * @FilePath: /myblog/src/router/routes.js
 */

export default [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/Home')
  },
  {
    name: 'About',
    path: '/about',
    meta: {
      title: '关于',
    },
    component: () => import('@/views/About'),
  },
  {
    name: 'Blog',
    path: '/blog',
    meta: {
      title: '文章',
    },
    component: () => import('@/views/Blog')
  },
  {
    name: 'BlogCategory',
    path: '/blog/cate/:categoryId',
    component: () => import('@/views/Blog')
  },
  {
    name: 'ArticleDetail',
    path: '/article/:id',
    component: () => import('@/views/Blog/ArticleDetail.vue')
  },
  {
    name: 'Project',
    path: '/project',
    meta: {
      title: '项目&效果',
    },
    component: () => import('@/views/Project')
  },
  {
    name: 'Message',
    path: '/message',
    meta: {
      title: '留言板',
    },
    component: () => import('@/views/Message')
  },
  {
    name: '404',
    path: '*',
    component: () => import('@/views/404')
  }
]