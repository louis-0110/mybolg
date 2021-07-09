import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
Vue.use(VueRouter);

export default new VueRouter({
  //配置
  routes,
  mode:'history'
})