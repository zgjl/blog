var EventUtil = {
//指定事件处理程序
    addHandler: function(element, type, handler){
        if (element.addEventListener){//检测传入的元素是否存在DOM2级方法
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){//如果存在IE的方法
            element.attachEvent("on" + type, handler);
        } else {//使用DOM0级方法（现代浏览器中，应该不会执行这里的代码）
            element["on" + type] = handler;//使用方括号语法来将属性名指定为事件处理程序
            // JavaScript可以使用方括号表示法来访问对象的属性，将要访问的属性以字符串的形式放在方括号中
        }
    },
//button属性的值，0鼠标左键，1鼠标滚轮，2鼠标右键    
    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },
//event对象charCode属性，检测charCode是否可用，如果不可用则使用keyCode   
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    
    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
//getEvent()返回对event对象的引用   
    getEvent: function(event){
        return event ? event : window.event;
    },
//relatedTarget 事件属性返回与事件的目标节点相关的节点。
// 对于 mouseover 事件来说，该属性是鼠标指针移到目标节点上时所离开的那个节点。
// 对于 mouseout 事件来说，该属性是离开目标时，鼠标指针进入的节点。   
    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    
    },
//getTarget()返回事件的目标    
    getTarget: function(event){
        return event.target || event.srcElement;
    },
//鼠标滚轮事件    
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
//preventDefault()取消事件的默认行为    
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
//删除事件处理程序
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    
    setClipboardText: function(event, value){
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    },
//stopPropagation()阻止事件流   
    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

};