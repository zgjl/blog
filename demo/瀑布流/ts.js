var i = 1;
function gx() {
    var div = document.getElementById("main");
    var a = document.createElement("div");

    a.innerHTML = "<div class='pin'><div class='box'><img src='img/" + i + ".jpg' /></div></div>"
    var first = div.firstChild;
    div.insertBefore(a, first)
    // div.appendChild(a);
    if (i === 197) { i = 1 } else { i = i + 1; }

    // for (var i = 1; i < 198; i++) {
    //     var a = document.createElement("div");
    //     a.innerHTML = "<div class='pin'><div class='box'><img src='img/" + i + ".jpg' /></div></div>"
    //     var first = div.firstChild;
    //     div.insertBefore(a, first)        
    // }

}

function rm() {
    var div = document.getElementById("main");
    div.removeChild(div.firstChild);
}

function ts() {
    rm();
    gx();
}

function pb() {
    waterfall('main', 'pin');
    // var dataInt = { 'data': [{ 'src': '1.jpg' }, { 'src': '2.jpg' }, { 'src': '3.jpg' }, { 'src': '4.jpg' }] };JSON对象

    var dataInt = { 'data': [] };//新建一个对象，对象有一个data属性，该属性是个数组
    for (var i = 26; i < 197; i++) {
        dataInt.data[i - 26] = { 'src': +i + '.jpg' }//注意此处给数组赋值
    };
    console.log(dataInt);
    //滚动加载图片
    window.onscroll = function () {
        if (checkscrollside()) {//加载图片的条件
            var oParent = document.getElementById('main');// 父级对象
            for (var i = 0; i < dataInt.data.length; i++) {
                var oPin = document.createElement('div'); //添加 元素节点
                oPin.className = 'pin';                   //添加 类名 name属性
                oParent.appendChild(oPin);              //添加 子节点
                var oBox = document.createElement('div');
                oBox.className = 'box';
                oPin.appendChild(oBox);
                var oImg = document.createElement('img');
                oImg.src = "img/" + dataInt.data[i].src;
                oBox.appendChild(oImg);
            }
            waterfall('main', 'pin');
        };
    }

}

//瀑布流，实现原理，从第num+1张图片开始，每张图片排列在列高最低的图片下面，然后此列的高度也更新
function waterfall(parent, pin) {
    var oPerent = document.getElementById(parent);//获取父级元素
    var aPin = getClassObj(oPerent, pin);//通过父级和子元素的class类 获取该同类子元素的数组
    var iPinW = aPin[0].offsetWidth + 1;//获取每个数据流的宽度
    var num = Math.floor(document.documentElement.clientWidth / iPinW);//计算数据流的列数
    oPerent.style.cssText = 'width:' + iPinW * num + 'px;' + 'margin:0 auto;';//定义父级元素的宽度，居中

    var pinHArr = [];//定义数组
    for (var i = 0; i < aPin.length; i++) {
        var pinH = aPin[i].offsetHeight;//数据流的高度
        if (i < num) {
            pinHArr[i] = pinH;
        } else {
            var minH = Math.min.apply(null, pinHArr);//数组pinHArr中的最小值minH，apply函数
            var minHIndex = getminHIndex(pinHArr, minH);
            aPin[i].style.position = 'absolute';//设置绝对位移
            aPin[i].style.top = minH + 'px';
            aPin[i].style.left = aPin[minHIndex].offsetLeft + 'px';
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            pinHArr[minHIndex] += aPin[i].offsetHeight;//更新添加了块框后的列高 
        }

    }
}

//通过父级和子元素的class类 获取该同类子元素的数组
function getClassObj(parent, className) {
    var obj = parent.getElementsByTagName('*');
    var pinS = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].className == className) {
            pinS.push(obj[i])
        }
    };
    return pinS;
}

//获取 pin高度 最小值的索引index
function getminHIndex(arr, minH) {
    for (var i in arr) {
        if (arr[i] == minH) {
            return i;
        }
    }
}

function checkscrollside() {
    var oParent = document.getElementById('main');
    var aPin = getClassObj(oParent, 'pin');
    var lastPinH = aPin[aPin.length - 1].offsetTop + Math.floor(aPin[aPin.length - 1].offsetHeight / 2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//注意解决兼容性
    var documentH = document.documentElement.clientHeight;//页面高度
    return (lastPinH < scrollTop + documentH) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
}
