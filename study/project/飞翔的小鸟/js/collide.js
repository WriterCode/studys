function collideFn(bird,duct){
	// 获取bird的上边
	var t1 = bird.offsetTop;
	// 获取bird的左边
	var l1 = bird.offsetLeft;
	// 获取bird的下边
	var r1 = t1 + bird.clientHeight;
	// 获取bird的右边
	var b1 = l1 + bird.clientWidth;
	// 获取duct的上边
	var t2 = duct.offsetTop;
	// 获取duct的左边
	var l2 = duct.parentNode.offsetLeft;
	// 获取duct的下边
	var r2 = t2 + duct.clientHeight;
	// 获取duct的右边
	var b2 = l2 + duct.clientWidth;
	if(r1>t2 && l1<b2 && t1<r2 && b1>l2){
		return true;
	}else{
		return false;
	}
}