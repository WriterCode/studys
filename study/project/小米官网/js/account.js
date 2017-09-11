var zh = document.querySelector('.zh');
var sm = document.querySelector('.sm');
var accountM = document.querySelector('.accountM');
var accountM1 = document.querySelector('.accountM1');
zh.onclick  = function(){
	sm.style.color = '#757575';
	zh.style.color = '#ff6700';
	accountM.style.display = 'block';
	accountM1.style.display = 'none';
}
sm.onclick  = function(){
	sm.style.color = '#ff6700';
	zh.style.color = '#757575';
	accountM1.style.display = 'block';
	accountM.style.display = 'none';
}

var yanz1 = document.querySelector('#yanz1');
var yanz2 = document.querySelector('#yanz2');
var yanz3 = document.querySelector('#yanz3');
// var yanz4 = document.querySelector('#yanz4');
var inp1 = document.querySelector('#inp1');
var inp2 = document.querySelector('#inp2');
var btn = document.querySelector('button');
var reg = /^1[34578]\d{9}$/;;
btn.onclick = function(){
	console.log(reg.test(inp1.value));
	if(inp1.value == ''){
		yanz1.style.display = 'block';
		yanz2.style.display = 'none';
		yanz3.style.display = 'none';
		// yanz4.style.display = }'none';
		inp1.style.border = '1px solid #ff6700';
		inp2.style.border = '';
	}else if(inp2.value == '' && inp1.value != ''){
		yanz2.style.display = 'block';
		yanz1.style.display = 'none';
		yanz3.style.display = 'none';
		inp2.style.border = '1px solid #ff6700';
		inp1.style.border = '';
		// yanz4.style.display = 'none';
	}else if(!reg.test(inp1.value) && inp2.value != '' && inp1.value != ''){
		yanz1.style.display = 'none';
		yanz2.style.display = 'none';
		yanz3.style.display = 'block';
		inp1.style.border = '1px solid #ff6700';
		inp2.style.border = '';
		// yanz4.style.display = 'none';
	}else{
		yanz1.style.display = 'none';
		yanz2.style.display = 'none';
		yanz3.style.display = 'none';
		inp1.style.border = '';
		inp2.style.border = '';
	}	
}

document.onkeydown = function(e){
	var ev = document.event || e;
	console.log(ev.keyCode);
	if(ev.keyCode == 13){
		if(inp1.value == ''){
			yanz1.style.display = 'block';
			yanz2.style.display = 'none';
			yanz3.style.display = 'none';
			// yanz4.style.display = }'none';
			inp1.style.border = '1px solid #ff6700';
			inp2.style.border = '';
		}else if(inp2.value == '' && inp1.value != ''){
			yanz2.style.display = 'block';
			yanz1.style.display = 'none';
			yanz3.style.display = 'none';
			inp2.style.border = '1px solid #ff6700';
			inp1.style.border = '';
			// yanz4.style.display = 'none';
		}else if(!reg.test(inp1.value) && inp2.value != '' && inp1.value != ''){
			yanz1.style.display = 'none';
			yanz2.style.display = 'none';
			yanz3.style.display = 'block';
			inp1.style.border = '1px solid #ff6700';
			inp2.style.border = '';
			// yanz4.style.display = 'none';
		}else{
			yanz1.style.display = 'none';
			yanz2.style.display = 'none';
			yanz3.style.display = 'none';
			inp1.style.border = '';
			inp2.style.border = '';
		}
	}
}
