var date=['phone','iphone','sumsing','huashuo','pod0','touch','kele'],
	timer=null,//设置变量定时器，初值为空
	flag=0;//设置一个全局变量，用来给当前状态做标记；

window.onload=function () {
	//var title=document.getElementById('title'),这里是局部变量，写错了，注释掉
	var	play=document.getElementById('play'),
		stop=document.getElementById('stop');
	play.onclick=playFun;
	// stop.onclick=null;这个是错的
	stop.onclick=stopFun;

	//键盘事件，用键盘控制
	document.onkeyup=function(event){
		event=event || window.event;
		if (event.keyCode==13) {
			if (flag==0) {
				playFun();
				flag=1;
			} else {
				stopFun();
				flag=0;
			}
		} 
	}
}

function playFun() {
	// var that=this;//在哪里调用，this就指向谁，这次指向play
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);//每次运行这个函数前，需要先清除一次定时器
	timer=setInterval(function () {
		//用floor对random取整，取整办法为随机数乘date的数量；
		var random=Math.floor(Math.random()*date.length);
		title.innerHTML=date[random];
	},100);
	play.style.background='#999';//当运行此函数时，按钮变色

}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}

//通过keyCode 的方法得知键盘键码值，enter=13；
/*	
	document.onkeyup=function(event){
	    event= event ||window.event //做ie兼容
	    console.log(event.keyCode);
	}

*/


/*思路：
 把抽奖的名单做成一个数组，用定时器去获得一个随机数作为下标
 把下标对应的字符传给html中元素的位置。

 点击停止的时候，清理计数器，终止函数
 */
