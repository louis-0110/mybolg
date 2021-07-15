/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-15 21:31:41
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-15 23:16:50
 * @FilePath: /myblog/src/directives/loading.js
 */

import loadingImg from '@/assets/Loading.svg'
import style from './img.module.less'
function createImg() {
  const img = document.createElement('img');
  img.src = loadingImg;
  console.log(style)
  img.className = style["img-center"];
  img.classList.add('img-loading')
  img.dataset.role = 'loading'
  return img;
}

export default function (el, binding) {
  console.log(el, binding)
  // true 且 改变了 value值
  if (binding.value) {
    if (binding.oldValue !== binding.value) {
      const img = createImg();
      el.appendChild(img)
    }
  } else {
    const img = document.querySelector('.img-loading[data-role="loading"]')
    console.log(img)
    if (img) {
      el.removeChild(img)
    }
  }
}