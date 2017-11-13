window.onload = function () {
	var obtn = document.getElementById('totop');
	var obtn1 = document.getElementById('btn-top');
	//获取窗口文档显示区的高度
	var clientHeight = document.documentElement.clientHeight || window.innerHeight;
	var timer1 = null;
	var isTop = true;

	window.onscroll = function () {
		//获取滚动高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;

		if (osTop >= clientHeight) {
			obtn1.style.display = "block";
		} else {
			obtn1.style.display = "none";
		}
		if (!isTop) {
			clearInterval(timer1);
		}
		isTop = false;

	}

	obtn.onclick = function () {

		//设置定时器
		timer1 = setInterval(function () {
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			// console.log(osTop - ispeed);
			if (osTop === 0) {
				clearInterval(timer1);
			}
		}, 30);
	}

}