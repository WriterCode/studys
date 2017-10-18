
/*animate(ele, {
    "width": 100,
    "height": 100,
    "opacity": 0.5
}, 1000, function () {
    console.log('finish');
})*/



function getStyle(dom, attr) {
    return dom.currentStyle ? dom.currentStyle[attr] : window.getComputedStyle(dom, null)[attr];
}

function animate(ele, json, times, callback) {
    //获取要改变的属性的初始值
    var start = {};
    for (var key in json) {
        if (key == 'opacity') {
            //兼容不透明度IE8-
            if(getStyle(ele, key)==undefined){
                ele.style.opacity = 1;
                ele.style.filter = 'alpha(opacity=100)';
            }
            start[key] = parseFloat(getStyle(ele, key)) * 100;
        } else {
            start[key] = parseInt(getStyle(ele, key));
        }

    }
    //修改回电函数this指针
    ele.callback = callback;
    //计算动画执行间隔
    var space = times / 100;
    //声明变量
    var x = 0;
    //清除之前的计时器
    clearInterval(ele.timer);
    //添加动画定时器
    ele.timer = setInterval(function () {
        x += 9;
        //计算每条属性的变化值,实时改变
        for (var key in json) {
            if (key == 'opacity') {
                var len = (json[key]*100 - start[key]) * Math.sin((x / 10) * (Math.PI / 180));
                ele.style.opacity = (start[key]+ len)/100;
                ele.style.filter = 'alpha(opacity='+(start[key]+ len)+')';
            } else {
                var len = (json[key] - start[key]) * Math.sin((x / 10) * (Math.PI / 180));
                ele.style[key] = start[key] + len + 'px';
            }
        }
        //判断动画何时结束
        if (x == 900) {
            clearInterval(ele.timer);
            //执行回调函数
            if (ele.callback) {
                ele.callback();
            }
        }
    }, space)
}
