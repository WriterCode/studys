var icon = document.querySelector('#icon');
var cart = document.querySelector('.cart');
var span = document.querySelector('#icon span');
icon.onmouseenter = function(){
	icon.style.background = '#fff';
	span.style.color = 'orange';
	cart.style.display = 'block';
}
icon.onmouseleave = function(){
	icon.style.background = '';
	span.style.color = '';
	cart.style.display = 'none';
}

var shuru = document.querySelector('.shuru');
var tv = document.querySelector('.tv');
var xiaomi2 = document.querySelector('.xiaomi2');
var sousuo = document.querySelector('.sousuo');
var meau1 = document.querySelector('.meau1');
shuru.onclick = function(){
	tv.style.opacity = '0';
	xiaomi2.style.opacity = '0';
	shuru.style.border = '1px solid #ff6700';
	sousuo.style.border = '1px solid #ff6700';
	sousuo.style.borderLeft = 'none';
	meau1.style.display = 'block';
	event.stopPropagation();
}
document.onclick = function(){
	tv.style.opacity = '1';
	xiaomi2.style.opacity = '1';
	shuru.style.border = '';
	sousuo.style.border = '';
	sousuo.style.borderLeft = 'none';
	meau1.style.display = 'none';
}

var silder = document.querySelectorAll('.silder');
var meau2 = document.querySelector('.meau2');
var xian = document.querySelector('.xian');
var xmsj = document.querySelectorAll('.xmsj')

for(var i = 0;i < silder.length;i++){
	silder[i].index = i;
	silder[i].onmouseenter = function(){
		xian.style.opacity = '1';
		meau2.style.height = 220 + 'px';
		for(var j = 0;j < xmsj.length;j++){
			xmsj[j].style.display = 'none';
		}
		xmsj[this.index].style.display = 'block';
	}
	silder[i].onmouseleave = function(){
		xian.style.opacity = '0';
		meau2.style.height = 0 + 'px';
	}
}
meau2.onmouseenter = function(){
	xian.style.opacity = '1';
	meau2.style.height = 220 + 'px';
}
meau2.onmouseleave = function(){
	xian.style.opacity = '0';
	meau2.style.height = 0 + 'px';
}

var meau3 = document.querySelectorAll('.meau3');
var left_meau = document.querySelector('.left_meau');
var xgk = document.querySelectorAll('.xgk');
for(var i = 0;i < meau3.length;i++){
	meau3[i].index = i;
	meau3[i].onmouseenter = function(){
		left_meau.style.display = 'block';
		for(var j = 0;j < xgk.length;j++){
			xgk[j].style.display = 'none';
		}
		xgk[this.index].style.display = 'block';
	}
	meau3[i].onmouseleave = function(){
		left_meau.style.display = 'none';
	}
}
left_meau.onmouseenter = function(){
	left_meau.style.display = 'block';
}
left_meau.onmouseleave = function(){
	left_meau.style.display = 'none';
}

var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var xmmxL = document.querySelector('.xmmxL');
var xmmxR = document.querySelector('.xmmxR');
btn1.onclick = function(){
	xmmxL.style.left = -1230 + 'px';
	xmmxR.style.left = 0 + 'px';
	btn1.style.opacity = '0.6';
	btn2.style.opacity = '1';
}
btn2.onclick = function(){
	xmmxL.style.left = 0 + 'px';
	xmmxR.style.left = 1230 + 'px';
	btn1.style.opacity = '1';
	btn2.style.opacity = '0.6';
}
setInterval(function(){
	if(xmmxL.offsetLeft == 0){
		xmmxL.style.left = -1230 + 'px';
		xmmxR.style.left = 0 + 'px';
		btn1.style.opacity = '0.6';
		btn2.style.opacity = '1';
	}else if(xmmxR.offsetLeft == 0){
		xmmxL.style.left = 0 + 'px';
		xmmxR.style.left = 1230 + 'px';
		btn1.style.opacity = '1';
		btn2.style.opacity = '0.6';
	}
},5000)

var comment = document.querySelectorAll('.comment');
var shk = document.querySelectorAll('.shk');
for(var i = 0;i < comment.length;i++){
	comment[i].index = i;
	comment[i].onmouseenter = function(){		
		shk[this.index].style.height = 60 + 'px';
	}
	comment[i].onmouseleave = function(){
		shk[this.index].style.height = 0 + 'px';
	}
}

var elec = document.querySelectorAll('.elec');
for(var i = 0;i < elec.length;i++){
	elec[i].onmouseenter = function(){
		console.log(this.parentNode.parentNode.nextElementSibling.children[1].children)
		for(var j = 0;j < this.parentNode.parentNode.nextElementSibling.children[1].children.length;j++){
			this.parentNode.children[j].style.borderBottom = 'none';
			this.parentNode.children[j].style.color = '#333';
			this.parentNode.parentNode.nextElementSibling.children[1].children[j].style.display = 'none';
		}
		this.style.borderBottom = '2px solid #ff6700';
		this.style.color = '#ff6700';
		this.parentNode.parentNode.nextElementSibling.children[1].children[this.getAttribute('value')].style.display = 'block';
	}
}

var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');
var wntjL = document.querySelector('.wntjL');
var wntjR = document.querySelector('.wntjR');
btn3.onclick = function(){
	wntjL.style.left = -1230 + 'px';
	wntjR.style.left = 0 + 'px';
	btn3.style.opacity = '0.6';
	btn4.style.opacity = '1';
}
btn4.onclick = function(){
	wntjL.style.left = 0 + 'px';
	wntjR.style.left = 1230 + 'px';
	btn3.style.opacity = '1';
	btn4.style.opacity = '0.6';
}

// 视频
var video = document.querySelector('video');
var bol = true;
// 点击按钮让div显示和隐藏
var play = document.querySelectorAll('#play');
var videoPlay = document.querySelector('.videoPlay');
var btn5 = document.querySelector('.btn5');
// var totalTime = null;
for(var i = 0;i < play.length;i++){
	play[i].onclick = function(){
		videoPlay.style.height = 525 + 'px';
		// totalTime = video.duration/60;
	}
}
btn5.onclick = function(){
    videoPlay.style.height = 0 + 'px';
    bf.style.background = '';
    bol = true;
    video.load();
    videoPlayBtop1.style.width = 0 + 'px';
    playQ1.style.left = 0 + 'px';
}


// 播放和暂停
var videoPlayC = document.querySelector('.videoPlayC');
var bf = document.querySelector('#bf');
videoPlayC.onclick = function(){
	event.stopPropagation();
	video.style.zIndex = '0';
	videoPlayC.style.display = 'none';
	bf.style.background = 'url(img/btns.png) no-repeat -4px -22px';
	video.play();
	bfjdFn();
	sjFn();
	bol = false;
}
bf.onclick = function(){
	event.stopPropagation();
	if(bol){
		video.style.zIndex = '0';
		videoPlayC.style.display = 'none';
		bf.style.background = 'url(img/btns.png) no-repeat -4px -22px';
		video.play();
		bfjdFn();
		sjFn();
		bol = !bol;
	}else{
		video.style.zIndex = '0';
		bf.style.background = '';
		videoPlayC.style.display = 'block';
		video.pause();
		clearInterval(timer);
		bol = !bol;
	}
}



// 全屏
var qp = document.querySelector('#qp');
var videoPlayT = document.querySelector('.videoPlayT');
var bol1 = true;
qp.onclick = function(){
	if(bol1){
		videoPlay.style.width = '100%';
		videoPlay.style.height = '100%';
		video.style.width = '100%';
		// video.style.height = '100%';
		videoPlayT.style.display = 'none';
		video.style.top = 0 + 'px';
		fullScreen(videoPlay);
		bol1 = !bol1;
	}else{
		videoPlay.style.width = 850 +  'px';
		videoPlay.style.height = 525 + 'px';
		video.style.width = 850 + 'px';
		videoPlayT.style.display = 'block';
		video.style.top = 50 + 'px';
		// video.style.height = '';
		exitFullScreen(videoPlay);
		bol1 = !bol1;
	}
}
// 双击
videoPlay.ondblclick = function(){
	if(bol1){
		videoPlay.style.width = '100%';
		videoPlay.style.height = '100%';
		video.style.width = '100%';
		// video.style.height = '100%';
		video.style.top = 0 + 'px';
		videoPlayT.style.display = 'none';
		fullScreen(videoPlay);
		bol1 = !bol1;
	}else{
		videoPlay.style.width = 850 +  'px';
		videoPlay.style.height = 525 + 'px';
		video.style.width = 850 + 'px';
		videoPlayT.style.display = 'block';
		video.style.top = 50 + 'px';
		// video.style.height = '';
		exitFullScreen(videoPlay);
		bol1 = !bol1;
	}
}

// ESC退出全屏
document.onkeydown = function(e){
	var ev = window.event || e;
	ev.preventDefault();
	console.log(ev.keyCode);
	if(ev.keyCode == 27){
		videoPlay.style.width = 850 +  'px';
		videoPlay.style.height = 525 + 'px';
		video.style.width = 850 + 'px';
		videoPlayT.style.display = 'block';
		video.style.top = 50 + 'px';
		// video.style.height = '';
		exitFullScreen(videoPlay);
		bol1 = true;
	}
}


function fullScreen(el) {  
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,  
        wscript;  
   
    if(typeof rfs != "undefined" && rfs) {  
        rfs.call(el);  
        return;  
    }  
   
    if(typeof window.ActiveXObject != "undefined") {  
        wscript = new ActiveXObject("WScript.Shell");  
        if(wscript) {  
            wscript.SendKeys("{F11}");  
        }  
    }  
}  
  
function exitFullScreen(el) {  
    var el= document,  
        cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,  
        wscript;  
   
    if (typeof cfs != "undefined" && cfs) {  
      cfs.call(el);  
      return;  
    }  
   
    if (typeof window.ActiveXObject != "undefined") {  
        wscript = new ActiveXObject("WScript.Shell");  
        if (wscript != null) {  
            wscript.SendKeys("{F11}");  
        }  
  }  
} 


// 获取音量键,调节音量
var voice = document.querySelector('.voice');
var playQ2 = document.querySelector('.playQ2');
var playQ3 = document.querySelector('.playQ3');
playQ2.onmousedown = function(e){
	var ev = window.event || e;
	ev.preventDefault();
	ev.stopPropagation();
	var x = ev.clientX - playQ2.offsetWidth/2 - playQ2.offsetLeft;
	// var y = ev.clientY - playQ2.offsetHeight/2;
	document.onmousemove = function(e){
		var ev = window.event || e;
		ev.preventDefault();
		var x1 = ev.clientX - x;
		if(x1 <= 0){
			x1 = 0;
		}
		if(x1 >= 99){
			x1 = 99;
		}
		playQ2.style.left = x1 + 'px';
		playQ3.style.width = x1 + 'px';
		// video.volume获取音量
		video.volume = x1/100;
	}
}

voice.onclick = function(e){
	var ev = window.event || e;
	ev.preventDefault();
	var x1 = ev.clientX - voice.offsetLeft - videoPlay.offsetLeft + videoPlay.offsetWidth/2;
	console.log(ev.clientX)
	playQ2.style.left = x1 + 'px';
	playQ3.style.width = x1 + 'px';
	// video.volume获取音量
	video.volume = x1/100;
}

document.onmouseup = function(){
	document.onmousemove = null;
}

// 播放进度
// 返回视屏总长度
// console.log(video.duration);
// 返回视频及时进度
// console.log(video.currentTime);
var videoPlayBtop = document.querySelector('.videoPlayBtop');
var videoPlayBtop1 = document.querySelector('.videoPlayBtop1');
var playQ1 = document.querySelector('.playQ1');
// var time = video.currentTime;
function bfjdFn(){
	timer = setInterval(function(){
		var timeL = videoPlayBtop.offsetWidth / video.duration * video.currentTime;
		// console.log(timeL);
		videoPlayBtop1.style.width = timeL + 'px';
		playQ1.style.left = timeL + 'px';
	},1000)
}
// 拖动
playQ1.onmousedown = function(e){
	var ev = window.event || e;
	ev.preventDefault();
	ev.stopPropagation();
	var x3 = ev.clientX - playQ1.offsetWidth/2 - playQ1.offsetLeft;
	document.onmousemove = function(e){
		var ev = window.event || e;
		ev.preventDefault();
		var x4 = ev.clientX - x3;
		if(x4 < 0){
			x4 = 0;
		}
		if(x4 > videoPlayBtop.offsetWidth-10){
			x4 = videoPlayBtop.offsetWidth-10;
		}
		playQ1.style.left = x4 + 'px';
		videoPlayBtop1.style.width = x4 + 'px';
		video.currentTime = video.duration * x4/(videoPlayBtop.offsetWidth-10); 
	}
}
// 点击
videoPlayBtop.onclick = function(e){
	var ev = window.event || e;
	ev.preventDefault();
	ev.stopPropagation();
	var x4 = ev.clientX - videoPlay.offsetLeft + videoPlay.offsetWidth/2;
	playQ1.style.left = x4 + 'px';
	videoPlayBtop1.style.width = x4 + 'px';
	video.currentTime = video.duration * x4/(videoPlayBtop.offsetWidth-10);
	// console.log(x4);
	 
}

// 时间变动
var sj = document.querySelector('#sj');
function sjFn(){
	timer1 = setInterval(function(){
		var minte = parseInt(video.duration/60);
		var minte1 = parseInt(video.currentTime/60); 
		var sec = parseInt(video.currentTime-minte1*60);
		if(minte < 10){
			minte = '0' + minte;
		}
		if(minte1 < 10){
			minte1 = '0' + minte1;
		}
		if(sec < 10){
			sec = '0' + sec;
		}
		sj.innerHTML = minte1 + ':' + sec + '/' + minte + ':' + parseInt(video.duration-minte*60);
	},1000)
}

video.onended = function(){
	videoPlayC.style.display = 'block';
	bf.style.background = '';
}