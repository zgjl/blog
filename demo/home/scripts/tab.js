// 登录选项卡切换
$(function () {
	var $tab = $(".l-tab-list");
	var $pass = $(".pass-login-covers");
	var $sms = $(".sms-login-covers");
	$tab.click(function () {
		if ($(this).hasClass("current")) {
			$pass.removeClass("hide");
			$sms.addClass("hide");
			// $(this).css("color", "blue").siblings().css("color", "black")
			$(this).css("text-decoration", "underline").siblings().css("text-decoration", "none")
		} else {
			$sms.removeClass("hide");
			$pass.addClass("hide");
			// $(this).css("color", "blue").siblings().css("color", "black")
			$(this).css("text-decoration", "underline").siblings().css("text-decoration", "none")
		}
	})
})