/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-03 23:12:53
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-10 15:22:43
 * @FilePath: /myblog/src/utils/getComputedStyleRecte.js
 */
import Vue from 'vue'

export default function(el,props){
  const vm = new Vue({
    render:h => h(el,{
      props
    })
  })
  vm.$mount();
  return vm.$el
}