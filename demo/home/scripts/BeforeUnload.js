EventUtil.addHandler(window, "beforeunload", function(event){
    event = EventUtil.getEvent(event);
    var message = "您真的确定离开此页面吗？";
    event.returnValue = message;
    return message;
});
