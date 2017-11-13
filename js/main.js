$(function () {
// 导航栏效果
	$("#li1").click(function () {
		$(this).css("font-size", "16px")
		$(this).siblings().css("font-size", "14px")
		$("#section1").slideDown(1000);
		$("#section1").siblings().hide();
	});

	$("#li2").click(function () {
		$(this).css("font-size", "16px")
		$(this).siblings().css("font-size", "14px")
		$("#section2").slideDown(1000);
		$("#section2").siblings().hide();
	});

	$("#li3").click(function () {
		$(this).css("font-size", "16px")
		$(this).siblings().css("font-size", "14px")
		$("#section3").slideDown(1000);
		$("#section3").siblings().hide();
	})

	$("#li4").click(function () {
		$(this).css("font-size", "16px")
		$(this).siblings().css("font-size", "14px")
		$("#section4").slideDown(1000);
		$("#section4").siblings().hide();
	})

	$("#li5").click(function () {
		$(this).css("font-size", "16px")
		$(this).siblings().css("font-size", "14px")
		$("#section5").slideDown(1000);
		$("#section5").siblings().hide();
	})
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
// 加载更多效果
	var num2 = 1;
	$(".loadhtml2").click(function () {
		if (num2 == 8) {
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
			num2++;
		}
	})

	var num4 = 1;
	$(".loadhtml4").click(function () {
		if (num4 == 4) {
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
			num4++;
		}
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