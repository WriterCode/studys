var zw = document.querySelector('.zw');
var btn1 = document.querySelector('#btn1');
var gd = document.querySelector('#gd');
var navBtn = document.querySelector('#navBtn');
var xl = document.querySelector('.xl');
var back = document.querySelector('#back');
var logo = document.querySelector('.logo');
var bol = true;
btn1.onclick = function(){
	if(bol){
	  	zw.style.display = 'block';
	  	bol = !bol;
	}else{
	  	zw.style.display = 'none';
	  	bol = !bol;
	}
} 

var count = 0;
navBtn.onclick = function(){
	
	if(bol){
		var timer = setInterval(function(){
			count+=5;
			console.log(count);
			if(count >= 210){
				count = 210;
				xl.style.position = 'fixed';
				xl.style.zIndex = 999;
				gd.style.paddingTop = 300 + 'px';
				clearInterval(timer);
			}
			xl.style.height = count + 'px';
			},1)  	
	  	bol = !bol;
	}else{
	  	var timer1 = setInterval(function(){
			count-=5;
			if(count < 0){
				count = 0;
				gd.style.paddingTop = 80 + 'px';
				clearInterval(timer1);
			}
			xl.style.height = count + 'px';
		},0.1)
	  	bol = !bol;
	}
} 

var sousuo = document.querySelector('.sousuo');
var btn2 = document.querySelector('#btn2');
btn2.onclick = function(){
	sousuo.style.display = 'block';
} 
sousuo.onclick = function(){
	sousuo.style.display = 'none';
}

logo.onclick = function(){
	window.location.href = 'file:///C:/Users/admin/Desktop/zixingerwei/%E8%87%B4%E8%B1%A1%E5%B0%94%E5%BE%AE.html';
}

back.onclick = function(){
	window.history.back(-1);
}

window.onresize = function(){
    if(document.documentElement.clientWidth > 900){
    	xl.style.height = 0;
    	gd.style.paddingTop = 80 + 'px';
	}
}