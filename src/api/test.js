/*
 * @Description: api 请求
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 21:03:03
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-20 14:33:54
 * @FilePath: /myblog/src/api/test.js
 */

import axios from 'axios';
import Vue from 'vue';

const baseURL = 'http://rap2api.taobao.org/app/mock/286900/';
const timeout = 1000;

const instance = axios.create({
  baseURL,
  timeout
})

const instanceMock = axios.create({
  timeout
});

instance.interceptors.response.use(config => {
  if (config.data.code === 200) {
    return config.data.data;
  } else {
    Vue.prototype.$message({
      content: '获取数据失败',
      type: 'dellete',
      duration: 3000
    })
  }
}, error => {
  return Promise.reject(error);
});

instanceMock.interceptors.response.use(config => {
  if (config.data.code === 200) {
    return config.data.data;
  } else {
    Vue.prototype.$message({
      content: '获取数据失败',
      type: 'dellete',
      duration: 3000
    })
  }
}, error => {
  return Promise.reject(error);
});

export async function getBanners(params = {}) {
  const res = await instance.get('getBanners', {
    params
  });
  return res;
}

export async function getBlog(params = {}) {
  const res = await instanceMock.get('blog', {
    params
  })
  return res;
}

export async function getCategory(params = {}) {
  const res = await instanceMock.get('blogListNav', {
    params
  })
  return res
}