//轮播图

	var slide = document.getElementById("slide");
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var index = 1;
	var timer;
	var animated = false;
	var len = 6;//轮播图片数量
	var width=parseInt(document.getElementById("slider-adv").style.width);
	//按钮变色效果
	function showButton(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className=='on'){
		   buttons[i].className='';
		   break;
		   }
		}
		buttons[index - 1].className = 'on';
		}
	//动画效果
	function animate(offset){
		  if (offset == 0) {
                    return;
                }
         animated = true;
		var time = 300;
		var interval = 10;
		var speed = offset/(time/interval);
		var newLeft = parseInt(slide.style.left) + offset;
	//图片轮播
   function go(){
			if((speed>0&&parseInt(slide.style.left)<newLeft)||
			(speed<0&&parseInt(slide.style.left)>newLeft)){
				slide.style.left = parseInt(slide.style.left) + speed + 'px';
                        setTimeout(go, interval);
			}else{

		slide.style.left =newLeft+'px';

		if(newLeft>-width){
			slide.style.left= -width*len+'px';
			}
		if(newLeft<-width*len){
			slide.style.left= -width+'px';
			}
			animated = false;
			}

			}
		go();
		}

	//下一个
	next.onclick = function () {
		 if (animated) {
                    return;
                }
		  if (index == 6) {
                    index = 1;
                }
                else {
                    index += 1;
                }
		showButton()

		animate(-width);
		}
	//上一个
    prev.onclick = function () {
		 if (animated) {
                    return;
                }
		 if (index == 1) {
                    index = 6;
                }
                else {
                    index -= 1;
                }
		showButton();

		animate(width);
		}

		for (var i = 0;i< buttons.length;i++) {
                buttons[i].onclick = function () {
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -width* (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }
			//自动播放
			function play() {
				//间隔执行函数
                timer = setTimeout(function(){
					next.onclick();
					// loadXMLDoc('1.json');
					play();}, 2000);
            }
            function stop1(){
				clearTimeout(timer);//清除间隔执行
				}
            var container = document.getElementById('slider-adv');
			container.onmouseover=stop1;//鼠标移入停止自动播放
			container.onmouseout=play;//鼠标移除自动播放
			play();




