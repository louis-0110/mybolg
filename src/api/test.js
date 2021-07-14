/*
 * @Description: api 请求
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 21:03:03
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-13 16:01:03
 * @FilePath: /myblog/src/api/test.js
 */

import axios from 'axios';
import Vue from 'vue';

const baseURL = 'http://rap2api.taobao.org/app/mock/286900/';

const timeout = 2000;

const instance = axios.create({
  baseURL,
  timeout
})

instance.interceptors.response.use(config => {
  if(config.data.code === 200 ){
    return config.data.data;
  }else{
    Vue.prototype.$message({
      content:'获取数据失败',
      type:'dellete',
      duration:3000
    })
  }
}, error => {
  console.log(error)
  return Promise.reject(error);
});


export async function getBanners(params = {}) {
  const res = await instance.get('getBanners', {
    params
  });
  return res;
}
