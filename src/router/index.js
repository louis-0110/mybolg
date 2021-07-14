/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:16:05
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-12 17:38:16
 * @FilePath: /myblog/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
Vue.use(VueRouter);

const router = new VueRouter({
  //配置
  routes,
  mode:'history'
})
export default router;

router.beforeEach((to, from, next) => {
  console.log(to,from);
  next();
}
)