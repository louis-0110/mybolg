/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-16 19:21:34
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-16 20:37:04
 * @FilePath: /myblog/src/main.js
 */
import '@/mockjs/index.js';
import Vue from 'vue';
import App from './App.vue';
import '@/style/global.less';
import router from '@/router'

// import style from '@/style/message.module.less';

import msg from './utils/showMessages.js';

Vue.prototype.$message = msg;

import vLoading from '@/directives/loading.js'

Vue.directive('loading', vLoading);


var vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


