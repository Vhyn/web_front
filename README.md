# web_front
可以复用的轮子

event.js放的是事件兼容，包含有添加事件、移除事件、阻止事件冒泡、阻止默认事件四个方法。


getElement.js的效果等同于getElementById('')

##keyborad-event

keyborad-event文件，联系键盘事件，用一个抽奖做尝试，有三个文件

1. index.html
2. main.css
3. main.js

在js文件中有备注

##meun.html

一个下拉菜单js练习

要求，将`ul`内的`li`标签内容传到`div`中；

实现方式是鼠标和键盘两种方式，在键盘实现上出来一个小bug——边界控制有误，当键盘下拉次>`as.length`时，js会报错。

点击其他区域或者选择好数据后，`ul`恢复到`display:none`的状态
