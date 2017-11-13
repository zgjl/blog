function loadXMLDoc(url) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //执行代码
            //JSON.parse获取json对象
            var a = JSON.parse(xhr.responseText);
            var arr = a.src.sort(randomSort);
            var b = document.getElementsByClassName('adv-top')[0];
            var imgs = b.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].src=arr[i];                
            }
        }
    }

    xhr.send(null);

    function randomSort(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
        }
}
loadXMLDoc('./data/1.json');
