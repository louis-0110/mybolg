/*
 * @Description: api 请求
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 21:03:03
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-27 09:56:30
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

/**
 * 获取首页图片信息
 * @param {*} params 
 * @returns 
 */
export async function getBanners(params = {}) {
  const res = await instance.get('getBanners', {
    params
  });
  return res;
}

/**
 * 获取博客列表
 * @param {*} params 
 * @returns 
 */
export async function getBlog(params = {}) {
  const res = await instanceMock.get('blog', {
    params
  })
  return res;
}

/**
 * 获取导航栏
 * @param {*} params 
 * @returns 
 */
export async function getCategory(params = {}) {
  const res = await instanceMock.get('blogListNav', {
    params
  })
  return res
}

/**
 * 获取文章
 * @param {}} params 
 * @returns 
 */
export async function getArticle(params = {}) {
  const res = await instanceMock.get('getArticle', {
    params
  })
  return res
}

/**
 * 提交评论
 * @param {*} data 
 * @returns 
 */
export async function postComment(data = {}) {
  return await instanceMock.post('postComment',
    data
  )
}

export async function getComments(params = { limit: 10, page: 1, id: -1 }) {
  return await instanceMock.get('comment', {
    params
  })
}