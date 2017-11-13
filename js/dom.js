document.body.addEventListener('DOMSubtreeModified', function () {
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


}, false);