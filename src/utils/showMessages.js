/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-03 23:07:37
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-10 15:30:04
 * @FilePath: /myblog/src/utils/showMessages.js
 */

import Icon from '@/components/Icon';
import getComputedStyleRecte from './getComputedStyleRecte';
import style from './showMessage.module.less'
/**
 * 显示标题
 *
 * @export
 * @param {String} content 显示内容
 * @param {String} type 显示类型 prompt dellete warn success
 * @param {Number} duration 默认 1500
 */

export default function ({ content, type = 'success', duration = 1500 }) {
  const msgDom = document.getElementsByClassName('message');
  // console.log(msgDom);
  if (msgDom.length > 0) {
    document.body.removeChild(msgDom[0]);
  }
  const div = document.createElement('div');
  const icon = getComputedStyleRecte(Icon, {
    type: type
  })
  let backColor;
  switch (type) {
    case 'dellete':
      backColor = '#f5222d';
      break;
    case 'warn':
      backColor = '#faad14';
      break;
    case 'prompt':
      backColor = '#00BFFF';
      break;
    default: 
      backColor = '#52c41a';
      break;
  }
  div.classList.add(style.msg);
  div.classList.add('message')
  div.style.backgroundColor = backColor;
  div.style.animationDuration = duration + 'ms';
  div.innerHTML = `<div>${icon.outerHTML}<span>${content}</span></div>`;
  document.body.appendChild(div);
}
