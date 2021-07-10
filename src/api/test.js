/*
 * @Description: api 请求
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 21:03:03
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-10 15:43:15
 * @FilePath: /myblog/src/api/test.js
 */

import axios from 'axios';

const baseURL = 'http://rap2api.taobao.org/app/mock/286430/';

const timeout = 2000;

const instance = axios.create({
  baseURL,
  timeout
})

instance.interceptors.response.use(config => {
  return config.data;
}, error => {
  console.log(error)
  return Promise.reject(error);
});


export default async function getApi(params = {}) {
  const res = await instance.get('example/1625476015476', {
    params
  });
  return res;
}
