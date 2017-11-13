// 内容随机排序
function content() {
    var boxlist = document.getElementsByClassName("work-list-box")[0];
    var boxs = boxlist.getElementsByClassName("card-box");
    var box1 = [];
    for (var i = 0; i < boxs.length; i++) {
        box1[i] = boxs[i];
    }
    box2 = box1.sort(randomSort)
    for (var i = 0; i < box2.length; i++) {
        boxlist.appendChild(box2[i])
    }

    function randomSort(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
    }
}

content();