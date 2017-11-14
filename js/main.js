$(function () {
	
	var total2 = 10;//前端知识,网页数量
	var total4 = 5;//文摘笔记,网页数量

	var num2 = total2 - 3;
	! function () {
		for (var i = total2; i > num2; i--) {
			var li = document.createElement("li");
			li.className = "box";
			var ul = $("#section2 ul");
			ul.append(li);
			ul.find("li").last().load("./html2/" + i + ".html", function () {
				if ($(".switch-open").hasClass("active")) {
					$(".box").css("background-color", "rgb(120, 120, 120)")
					$(".box").css("color", "rgb(255, 255, 255)")
					$(".content p").css("color", "rgb(255, 255, 255)")
					$(".more").css("color", "rgb(255, 255, 255)")
				}
			});
		}
	}();
	// 加载更多效果
	$(".loadhtml2").click(function () {
		if (num2 == 0) {
			$(this).html("我是有底线的")
		} else {
			var li = document.createElement("li");
			li.className = "box";
			var ul = $(this).prev();
			ul.append(li);
			ul.find("li").last().load("./html2/" + num2 + ".html", function () {
				if ($(".switch-open").hasClass("active")) {
					$(".box").css("background-color", "rgb(120, 120, 120)")
					$(".box").css("color", "rgb(255, 255, 255)")
					$(".content p").css("color", "rgb(255, 255, 255)")
					$(".more").css("color", "rgb(255, 255, 255)")
				}
			});
			num2--;
		}
	})

	var num4 = total4 - 3;
	! function () {
		for (var i = total4; i > num4; i--) {
			var li = document.createElement("li");
			li.className = "box";
			var ul = $("#section4 ul");
			ul.append(li);
			ul.find("li").last().load("./html4/" + i + ".html", function () {
				if ($(".switch-open").hasClass("active")) {
					$(".box").css("background-color", "rgb(120, 120, 120)")
					$(".box").css("color", "rgb(255, 255, 255)")
					$(".content p").css("color", "rgb(255, 255, 255)")
					$(".more").css("color", "rgb(255, 255, 255)")
				}
			});
		}
		
	}();
	$(".loadhtml4").click(function () {
		if (num4 == 0) {
			$(this).html("我是有底线的")
		} else {
			var li = document.createElement("li");
			li.className = "box";
			var ul = $(this).prev();
			ul.append(li);
			ul.find("li").last().load("./html4/" + num4 + ".html", function () {
				if ($(".switch-open").hasClass("active")) {
					$(".box").css("background-color", "rgb(120, 120, 120)")
					$(".box").css("color", "rgb(255, 255, 255)")
					$(".content p").css("color", "rgb(255, 255, 255)")
					$(".more").css("color", "rgb(255, 255, 255)")
				}
			});
			num4--;
		}
	})

	// 导航栏效果
	function liClick(selector, obj) {
		var speed = $(selector).outerHeight() / 2;
		obj.css("font-size", "16px")
		obj.siblings().css("font-size", "14px")
		$(selector).slideDown(speed);
		$(selector).siblings().hide();
	}

	$("#li1").click(function () {
		obj = $(this)
		liClick("#section1", obj)
	});
	$("#li2").click(function () {
		obj = $(this)
		liClick("#section2", obj)
	});
	$("#li3").click(function () {
		obj = $(this)
		liClick("#section3", obj)
	});
	$("#li4").click(function () {
		obj = $(this)
		liClick("#section4", obj)
	});
	$("#li5").click(function () {
		obj = $(this)
		liClick("#section5", obj)
	});

	// 夜间模式切换
	$(".switch-open").click(function () {
		$(this).addClass("active");
		$(".switch-close").removeClass("active");
		$("body").css("background-color", "rgb(63, 63, 63)")
		$(".box").css("background-color", "rgb(120, 120, 120)")
		$(".box").css("color", "rgb(255, 255, 255)")
		$(".content p").css("color", "rgb(255, 255, 255)")
		$("#section3 .content a").css("color", "rgb(255, 255, 255)")
		$(".more").css("color", "rgb(255, 255, 255)")
	})
	$(".switch-close").click(function () {
		$(this).addClass("active");
		$(".switch-open").removeClass("active");
		$("body").css("background-color", "rgb(150, 150, 150)")
		$(".box").css("background-color", "rgb(255, 255, 240)")
		$(".box").css("color", "rgba(0, 0, 0, 0.8)")
		$(".content p").css("color", "rgba(0, 0, 0, 0.8)")
		$("#section3 .content a").css("color", "rgb(41, 164, 180)")
		$(".more").css("color", "rgb(97, 137, 182)")
	})

	// 全文收起效果，注意：此处使用$(document).on来为文档中的每个全文绑定点击事件	
	$(document).on("click", ".more", function () {
		var p = $(this).next(".content").find("p");
		var str = p.css("overflow");
		if (str.indexOf("hidden") >= 0) {
			p.css({
				"line-height": "1.5em",
				"height": "auto",
				"overflow": "visible"
			})
			$(this).text("收起")
		} else {
			p.css({
				"line-height": "1.5em",
				"height": "9em",
				"overflow": "hidden"
			})
			$(this).text("全文")
		}
	})


})
