$(function () {
	
	$("#li1").click(function () {
		$("#section1").slideDown(1000);
		$("#section1").siblings().hide();
	});

	$("#li2").click(function () {
		$("#section2").slideDown(1000);
		$("#section2").siblings().hide();
	});

	$("#li3").click(function () {
		$("#section3").slideDown(1000);
		$("#section3").siblings().hide();
	})

	$("#li4").click(function () {
		$("#section4").slideDown(1000);
		$("#section4").siblings().hide();
	})

	$("#li5").click(function () {
		$("#section5").slideDown(1000);
		$("#section5").siblings().hide();
	})

	$(".switch-open").click(function () {
		$(this).addClass("active");
		$(".switch-close").removeClass("active");
		$("body").css("background-color", "rgb(63, 63, 63)")
		$(".box").css("background-color", "rgb(120, 120, 120)")
		$(".box").css("color", "rgb(255, 255, 255)")
		$(".content p").css("color", "rgb(255, 255, 255)")
	})
	$(".switch-close").click(function () {
		$(this).addClass("active");
		$(".switch-open").removeClass("active");
		$("body").css("background-color", "rgb(150, 150, 150)")
		$(".box").css("background-color", "rgb(255, 255, 240)")
		$(".box").css("color", "rgba(0, 0, 0, 0.8)")
		$(".content p").css("color", "rgba(0, 0, 0, 0.8)")
	})

	var num = 1;
	$(".loadhtml").click(function () {
		if (num == 4) {
        $(this).html("我是有底线的")
		} else {
			var li = document.createElement("li");
			li.className = "box";
			$(this).prev().append(li);
			$(this).prev().find("li").last().load("./html/" + num + ".html");
			num++;
		}


	})

	$(".more").click(function () {
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

