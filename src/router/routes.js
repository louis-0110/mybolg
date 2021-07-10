/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:29:20
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-10 14:13:59
 * @FilePath: /myblog/src/router/routes.js
 */

export default [
  {
    name: 'Home',
    path: '/',
    component: () =>  import('@/views/Home') 
  },
  {
    name: 'About',
    path: '/about',
    component: () =>  import('@/views/About') 
  },
  {
    name: 'Blog',
    path: '/blog',
    component: () =>  import('@/views/Blog') 
  },
  {
    name: 'Project',
    path: '/project',
    component: () =>  import('@/views/Project') 
  },
  {
    name: 'Message',
    path: '/message',
    component: () =>  import('@/views/Message') 
  }
]