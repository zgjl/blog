// 关闭登录弹出对话框
$(function () {
    $(".dltc").click(function (event) {
        event.preventDefault();
        $(".dl1").show();
    })    
})

function dlclose() {
    $(".dl1").hide();

}
