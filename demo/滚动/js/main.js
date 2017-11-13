window.onload = function () {
var imgs = document.getElementsByTagName("img");
var p = document.getElementById('content');


window.onscroll = function () {
    var ostop = document.documentElement.scrollTop || document.body.scrollTop;
    var height = imgs[0].height;
    var bodyheight = window.innerHeight + height * 5;
    var rh = document.getElementById('right').offsetHeight;
    document.body.style.height = bodyheight + "px";
    document.getElementById('left').style.height = rh + "px";


    // <br/>标签内不能有空格，很重要！！！
    if (ostop < height) {
        p.innerHTML = '故事开始以前<br/>最初的那些春天<br/>阳光洒在杨树上 风吹来 闪银光<br/>街道平静而温暖<br/>钟走得好慢<br/>那是我还不识人生之味的年代';
    }
    if (ostop > height && ostop < height * 2) {
        p.innerHTML = '我情窦还不开<br/>你的衬衣如雪<br/>盼着杨树叶落下 眼睛不眨<br/>心里像有一些话<br/>我们先不讲<br/>等待着那将要盛装出场的未来';
    }
    if (ostop > height * 2 && ostop < height * 3) {
        p.innerHTML = '人随风飘荡<br/>天各自一方<br/>在风尘中遗忘的清白脸庞<br/>此生多勉强<br/>此身越重洋<br/>轻描时光漫长低唱语焉不详代'
    }
    if (ostop > height * 3 && ostop < height * 4) {
        p.innerHTML = '数不清的流年<br/>似是而非的脸<br/>把你的故事对我讲<br/>就让我笑出泪光<br/>是不是生活太艰难<br/>还是活色生香<br/>我们都遍体鳞伤<br/>也慢慢坏了心肠<br/>你得到你想要的吗<br/>换来的是铁石心肠<br/>可曾还有什么人<br/>再让你幻想'
    }

    if (ostop > height * 4 && ostop < height * 5) {
        p.innerHTML = '大风吹来了<br/>我们随风飘荡<br/>在风尘中遗忘的清白脸庞<br/>此生多寒凉<br/>此身越重洋<br/>轻描时光漫长低唱语焉不详<br/>大风吹来了<br/>我们随风飘荡<br/>在风尘中熄灭的清澈目光<br/>我想回头望<br/>把故事从头讲<br/>时光迟暮不返人生已不再来'
    }
}

    fn1();

window.onresize = function () {
    fn1();
}
function fn1() {
    var imgs = document.getElementsByTagName("img");
    var h1 = imgs[0].offsetLeft - 290;
    document.getElementById('wrap').style.left = h1 + "px";
}

}