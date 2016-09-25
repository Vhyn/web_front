
var enventUtil ={
			//添加事件
			addHandler:function(element,type,handler){
				if (element.addEventListener) {
					element.addEventListener(type,handler,false);
				} else if(element.attachEvent){
					element.attachEvent("on"+type,handler);
				}else{
					element["on"+type]=handler
				}
			},
			removeHandler:function(element,type,handler){
				if (element.removeEventListener) {
					element.removeEventListener(type,handler,false);
				} else if(element.detachEvent){
					element.detachEvent("on"+type,handler);
				}else{
					element["on"+type]=handler
				}
			},
			//获取事件
			getEvent:function(event){
				return event?event:window.event;
			},
			getType:function(event){
				return event.type;
			},
			getElement:function(event){
				return event.target || event.srcElement;
			},
			//阻止默认行为
			preventDefault:function (event) {
				if (event.preventDefault) {
					event.preventDefault();
				} else {
					event.returnValue=false;
				}
			},
			//阻止冒泡
			stopPropagation:function(event){
				if (event.stopPropagation) {
						event.stopPropagation();//chrome等浏览器
				} else {
					event.cancelBubble();//IE 下阻止冒泡
				}
			}
		}
