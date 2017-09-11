//构造函数
function ImgScroll(id, imgList, space, speed) {
    //需要重复实例化的属性
    this.box = document.getElementById(id);
    this.list = imgList;
    this.space = space || 3000;
    this.speed = speed || 300;

    this.autoScroll();
}
//改写原型(添加公共的方法)
ImgScroll.prototype = {
    constructor: ImgScroll,
    getStyle: function (dom, attr) {
        return dom.currentStyle ? dom.currentStyle[attr] : window.getComputedStyle(dom, null)[attr];
    },
    animate: function (ele, json, times, callback) {
        //获取要改变的属性的初始值
        var start = {};
        for (var key in json) {
            if (key == 'opacity') {
                //兼容不透明度IE8-
                if (this.getStyle(ele, key) == undefined) {
                    ele.style.opacity = 1;
                    ele.style.filter = 'alpha(opacity=100)';
                }
                start[key] = parseFloat(this.getStyle(ele, key)) * 100;
            } else {
                start[key] = parseInt(this.getStyle(ele, key));
            }

        }
        //修改回调函数this指针
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
                    var len = (json[key] * 100 - start[key]) * Math.sin((x / 10) * (Math.PI / 180));
                    ele.style.opacity = (start[key] + len) / 100;
                    ele.style.filter = 'alpha(opacity=' + (start[key] + len) + ')';
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
    },
    createDom: function () {
        //缓存容器对象，图片列表
        var box = this.box;
        var list = this.list;
        //创建图片,创建底部按钮
        var oUl = '<ul id="scrollBall">';
        var oP = '<p id="points">';
        for (var i = 0; i < list.length; i++) {
            oUl += '<li><a href="' + list[i].href + '"><img src="' + list[i].url + '"></a></li>';
            if (i == 0) {
                oP += '<span class="high_light"></span>';
            } else {
                oP += '<span></span>';
            }

        }
        oUl += '<li><a href="' + list[0].href + '"><img src="' + list[0].url + '"></a></li></ul>';
        oP += '</p>';
        //插入图片，底部按钮
        box.innerHTML += oUl + oP;

        //创建，插入左右按钮
        box.innerHTML += '<a id="prev" class="hide" href="javascript:;">&lt;</a><a id="next" class="hide" href="javascript:;">&gt;</a>';
    },
    setStyle: function () {
        var box = this.box; //缓存容器对象
        var list = this.list; //缓存图片列表
        //获取容器尺寸
        var w = box.clientWidth;
        var h = box.clientHeight;
        //添加样式
        box.innerHTML = '<style>\
            #scrollBall{list-style:none;width:' + (w * (list.length + 1)) + 'px;overflow:hidden;position:absolute;left:0;top:0;}\
            #scrollBall li{float:left;width:' + w + 'px;}\
            #scrollBall li img{display:block;border:0;width:' + w + 'px;height:' + h + 'px;}\
            #scrollBall li a{display:block;}\
            #points{position: absolute;z-index: 5;overflow: hidden;width: 120px;padding: 5px;background: rgba(255,255,255,0.4);bottom: 30px;left: ' + (w - 120) / 2 + 'px;border-radius:10px;}\
            #points span{float: left;width: 14px;height: 14px;margin: 0 3px;background: #ffffff;border-radius: 50%;}\
            #points .high_light{background: #ed7878;}\
            #prev,#next{text-decoration:none;width: 30px;height: 50px;line-height: 50px;text-align: center;font-size: 20px;font-weight: bold;color:#ffffff;font-family: "黑体";background:rgba(0,0,0,0.5);position: absolute;top: ' + (h - 50) / 2 + 'px;}\
            #prev{left: 0;}#next{right:0;}\
            .hide{display: none;}.show{display: block;}\
        </style>';
        //创建结构
        this.createDom();
    },
    autoScroll: function () {
        this.setStyle();
        this.pic_box = this.box;
        this.scrollBall = document.getElementById('scrollBall');
        this.points = document.getElementById('points').getElementsByTagName('span');
        this.prev = document.getElementById('prev');
        this.next = document.getElementById('next');

        var len = this.list.length;
        var self = this;
        var w = self.pic_box.clientWidth;

        //自动轮播函数
        self.autoMove = function () {
            self.pic_box.timer ? clearTimeout(self.pic_box.timer) : null;
            self.pic_box.timer = setTimeout(self.move, self.space);
        }

        //设置变化的量，轮播方向
        self.pic_box.index = 0;
        self.pic_box.direction = 1;

        //滚动函数
        self.move = function () {
            self.pic_box.index += self.pic_box.direction;
            //判断向左轮播时的零界点
            if (self.pic_box.index == (len + 1)) {
                self.scrollBall.style.left = 0;
                self.pic_box.index = 1;
            } else if (self.pic_box.index == -1) {
                self.scrollBall.style.left = -len * w + 'px';
                self.pic_box.index = (len - 1);
            }
            //添加动画
            self.animate(self.scrollBall, {
                left: self.pic_box.index * -w
            }, self.speed, function () {
                //保证每张图停留的时间相等
                self.autoMove();
            })
            //底部小按钮跟随变化
            for (var i = 0; i < self.points.length; i++) {
                self.points[i].className = '';
            }
            self.points[self.pic_box.index % len].className = 'high_light';
        }
        self.autoMove();

        self.addEvent();
    },
    addEvent: function () {
        var self = this;
        var w = self.pic_box.clientWidth;
        //小按钮切换
        function clicks() {
            for (var i = 0; i < self.points.length; i++) {
                self.points[i].index = i;
                self.points[i].onclick = function () {
                    //显示第7张图时，点击第一个按钮无效
                    if (this.index == 0 && self.pic_box.index == self.list.length) {
                        return;
                    }
                    //修改下一次自动轮播的起始点
                    self.pic_box.index = this.index;
                    //添加动画
                    self.animate(self.scrollBall, {
                        left: self.pic_box.index * -w
                    }, self.speed, function () {
                        //保证每张图停留的时间相等
                        self.autoMove();
                    })

                    for (var j = 0; j < self.points.length; j++) {
                        self.points[j].className = '';
                    }
                    this.className = 'high_light';
                }
            }
        }
        clicks();

        //切换轮播方向
        self.pic_box.onmouseover = function () {
            self.prev.className = self.next.className = 'show';
            this.onmouseout = function () {
                self.prev.className = self.next.className = 'hide';
            }
        }
        self.prev.onclick = function () {
            clearTimeout(self.pic_box.timer);
            self.pic_box.direction = -1;
            self.move();
        }
        self.next.onclick = function () {
            clearTimeout(self.pic_box.timer);
            self.pic_box.direction = 1;
            self.move();
        }
    }
}
