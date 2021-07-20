/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-15 21:31:41
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-19 19:28:17
 * @FilePath: /myblog/src/directives/loading.js
 */

import loadingImg from '@/assets/Loading.svg'
import style from './img.module.less'
function createImg() {
  const img = document.createElement('img');
  img.src = loadingImg;
  img.className = style["img-center"];
  img.classList.add('img-loading')
  img.dataset.role = 'loading'
  return img;
}

export default {
  bind(el, binding, vnode) {
    // console.log('bind:',binding)
    const img = createImg();
    el.appendChild(img)
  },
  inserted(el, binding, vnode) {
    // console.log('inserted:',binding)
    if (window.getComputedStyle(el).position == 'static') {
      el.style.position = 'relative'
    }
  },
  update(el, binding, vnode, oldVnode) {
    // console.log('updata',binding)
    if (binding.value) {
      if (binding.oldValue !== binding.value) {
        const img = createImg();
        el.appendChild(img)
      }
    } else {
      const img = el.querySelector('.img-loading[data-role="loading"]')
      if (img) {
        el.removeChild(img)
      }
    }
  },
}