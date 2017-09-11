//获取元素样式
function getStyle(ele, attr) {
    return ele.currentStyle ? ele.currentStyle[attr] : window.getComputedStyle(ele, null)[attr];
}

function animate(ele, attrs, time, callback) {
    //判断透明度是否为undefined（兼容IE8-）
    if(getStyle(ele, 'opacity') == undefined){
        ele.style.opacity = 1;
        ele.style.filter = 'alpha(opacity=100)';
    }
    //保存初始值
    var start = {};
    for (var key in attrs) {
        if (key == 'opacity') {
            start[key] = parseFloat(getStyle(ele, key)) * 100;
        } else {
            start[key] = parseInt(getStyle(ele, key));
        }
    }
    //将时间划分为100份
    var space = time / 100;
    var deg = 0;
    //添加动画之前停止之前的动画
    clearInterval(ele.timer);
    //添加动画
    ele.timer = setInterval(function () {
        deg += 9;
        for (var key in attrs) {
            //判断是否为不透明度
            if (key == 'opacity') {
                //计算变化量
                var end = (attrs[key] * 100 - start[key]) * Math.sin((deg/10) * Math.PI / 180);
                ele.style.opacity = (start[key] + end) / 100;
                ele.style.filter = 'alpha(opacity=' + (start[key] + end) + ')';
            } else {
                //计算变化量
                var end = (attrs[key] - start[key]) * Math.sin((deg/10) * Math.PI / 180);
                ele.style[key] = (start[key] + end) + 'px';
            }
        }
        //判断动画停止条件
        if (deg == 900) {
            clearInterval(ele.timer);
            //动画结束后执行回调函数
            if (callback) {
                callback();
            }
        }
    }, space)
}
