
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
	
})