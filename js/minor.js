// 回到底部效果
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

// 时间格式化
function formatDate(dt) {
	if (!dt) {
		var dt = new Date();
	}

	var year = dt.getFullYear();
	var month = dt.getMonth() + 1;
	var date = dt.getDate();
	var hour = dt.getHours();
	var minute = dt.getMinutes();
	var second = dt.getSeconds();
	var day = dt.getDay();
	var days = '';
	switch (day) {
		case 0:
			days = "星期天";
			break;
		case 1:
			days = "星期一";
			break;
		case 2:
			days = "星期二";
			break;
		case 3:
			days = "星期三";
			break;
		case 4:
			days = "星期四";
			break;
		case 5:
			days = "星期五";
			break;
		case 6:
			days = "星期六";
			break;
	}

	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}

	return days+ " " +year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}
var text = document.getElementById("time")
setInterval(function () {
	text.innerHTML = formatDate(new Date());
}, 1000);

// var welcome = document.getElementById("welcome")
// setTimeout(function(){
// 	welcome.style.display="none";
// },3000)