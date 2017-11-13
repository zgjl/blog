function formxhr(url) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //执行代码
            //JSON.parse获取json对象
            a = JSON.parse(xhr.responseText)
            if ((document.getElementById('username').value == a.name) &&
                (document.getElementById('password').value == a.password)) {
                alert("登录成功！");
                location.href="index.html";
                // dlclose();
                // $(".unlogin").hide();
                // $(".login").show();
            } else {
                alert("用户名或密码不正确!")

            }
        }
    }

    xhr.send(null);
    
}






