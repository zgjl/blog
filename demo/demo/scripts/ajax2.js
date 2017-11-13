function loadXMLDoc2(url) {
    
        var xhr = new XMLHttpRequest();
    
        xhr.open("GET", url, true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                //执行代码
                //JSON.parse获取json对象
                var a = JSON.parse(xhr.responseText);
                var arr = a.src.sort(randomSort);
                var b = document.getElementById('slide');
                var imgs = b.getElementsByTagName("img");
                for (var i = 0; i < imgs.length-1; i++) {
                    imgs[i+1].src=arr[i];                
                }
                imgs[0].src=arr[5];
                imgs[7].src=arr[0];
            }
        }
    
        xhr.send(null);
    
        function randomSort(a, b) {
            return Math.random() > 0.7 ? -1 : 1;
            }
        
    } 
    loadXMLDoc2("./data/2.json")