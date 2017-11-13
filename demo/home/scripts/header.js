//头部固定效果
$(function(){
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>56){
			$("#header").addClass("headerfix")
		}else{
			$("#header").removeClass("headerfix")
		}
		})
})