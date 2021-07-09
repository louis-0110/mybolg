/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-16 19:21:34
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-06-04 00:24:53
 * @FilePath: /myblog/src/main.js
 */

import Vue from 'vue';
import App from './App.vue';
import '@/style/global.less';
import router from '@/router'

// import style from '@/style/message.module.less';

import msg from './utils/showMessages.js';

Vue.prototype.$message = msg;

var vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

