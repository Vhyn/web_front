//封装一个通过class获取对象的函数，为了避免ie10 以下的不兼容

function getByClass(clsName,parent) {
	var Oparent=parent?document.getElementById(parent):document,//父元素如果存在通过ID获取，如果不存在，则获取document;
	eles=[],
	elments=document.getElementsByTagName('*');//获取所有元素

	for (var i = 0, l=elments.length; i < l; i++) {
		if (elments[i].className==clsName) {
			eles.push(elments[i]);
		}
	}
	return eles;
}
/*比较所有元素的class，如果与指定的元素名相同，就把这个值给eles*/
