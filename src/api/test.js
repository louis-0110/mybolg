/*
 * @Description: api 请求
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 21:03:03
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-06-03 13:54:04
 * @FilePath: /myblog/src/api/test.js
 */

import axios from 'axios';

const baseURL = 'http://localhost:8080',
      timeout = 2000;

const instance = axios.create({
  baseURL,
  timeout
})

instance.interceptors.response.use(config => {
  console.log('123123123')
  return config.data;
}, error => {
  console.log(error)
  return Promise.reject(error);
});


export default async function getApi(params) {
  const res = await instance.get('/wpmapp/business/app/upDataUserInfo.ajax', {
    params
  });
  return res;
}
