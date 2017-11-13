//导航效果
$(function () {
	$(".menu-list-content li").hover(function () {
		$(this).find(".menu-list").show();
	}, function () {
		$(this).find(".menu-list").hide();
	});

	$(".login").hover(function () {
		$(this).find(".login-list").show();
	}, function () {
		$(this).find(".login-list").hide();
	})
})