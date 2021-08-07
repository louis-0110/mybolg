/*
 * @Description: lazy image onload
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-08-06 15:04:55
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-07 09:58:30
 * @FilePath: /myblog/src/directives/lazy.js
 */

import event from '@/eventBus.js'
import debounce from '@/utils/debounce';
import placeholder from '@/assets/placeholder.svg'

let imgs = [];

function setImage(el, src) {
	const clientHeight = document.body.clientHeight;
	const rect = el.getBoundingClientRect();
	const height = rect.height || 100;
	if (rect.top > -height && rect.top < 2 * clientHeight) {
		const img = new Image();
		img.onload = function () {
			console.log('加载完成')
			el.src = src
		}
		img.src = src
		imgs = imgs.filter(item => item.dom !== el)
	}
}

function setImages() {
	for (const item of imgs) {
		setImage(item.dom, item.src)
	}
}

function handleScroll(dom) {
	if (imgs.length > 0) {
		setImages()
	}
}

event.$on('mainScroll', debounce(handleScroll, 50));

export default {
	bind(el, binding) {
		imgs.push({
			dom: el,
			src: binding.value
		})
		el.src = placeholder;
	},
	inserted(el, binding, vnode) {
		setImage(el, binding.value)
	},
	unbind(el) {
		imgs = imgs.filter(item => item.dom !== el)
	}
}