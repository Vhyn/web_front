/*getstyle是一个用于获取元素样式的函数；
在JS中，直接获取样式可能出现计算异常的情况，因此封装一个函数
直接获得高等级的样式，不被其他计算污染*/


function getStyle(obj,attr) {
			if (obj.currentStyle) {
				//IE 浏览器使用currentStyle
				return obj.currentStyle[attr];
			} else {
				//firefox浏览器用getComputedStyle
				return obj.getComputedStyle[attr];
			}
		}
    
    
