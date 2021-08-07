/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-16 19:21:34
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-04 17:02:40
 * @FilePath: /myblog/src/main.js
 */
import '@/mockjs/index.js';
import Vue from 'vue';
import App from './App.vue';
import '@/style/global.less';
import router from '@/router';
import '@/eventBus.js';

// import style from '@/style/message.module.less';

import msg from './utils/showMessages.js';

Vue.prototype.$message = msg;
// 自定义指令
import vLoading from '@/directives/loading.js'
import vLazy from '@/directives/lazy.js'

Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy)

var vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')