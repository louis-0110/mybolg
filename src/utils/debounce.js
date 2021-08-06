/*
 * @Description:函数防抖
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-08-04 19:56:56
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-04 20:09:10
 * @FilePath: /myblog/src/utils/debounce.js
 */

export default function (handle, duration = 50) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('debounce')
      handle(...args)
    }, duration);
  }

}