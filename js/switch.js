$(".switch-open").click(function(){
    $(this).addClass("active");
    $(".switch-close").removeClass("active");
    $("body").css("background-color","rgb(63, 63, 63)")
    $(".box").css("background-color","rgb(120, 120, 120)")
    $(".box").css("color","rgb(255, 255, 255)")
    $(".content p").css("color","rgb(255, 255, 255)")
})
$(".switch-close").click(function(){
    $(this).addClass("active");
    $(".switch-open").removeClass("active");
    $("body").css("background-color","rgb(150, 150, 150)")
    $(".box").css("background-color","rgb(255, 255, 240)")
    $(".box").css("color","rgba(0, 0, 0, 0.8)")
    $(".content p").css("color","rgba(0, 0, 0, 0.8)")
})