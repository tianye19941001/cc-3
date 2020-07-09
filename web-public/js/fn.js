fnResize();
window.addEventListener("resize", function() {
    fnResize()
}, false);
function fnResize(){
    var docWidth = document.documentElement.clientWidth,
            body = document.getElementsByTagName('html')[0];
    body.style.fontSize = docWidth / 32 + 'px';
}

if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    handleFontSize();
} else {
    if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    } else if (document.attachEvent) {
        //IE浏览器，非W3C规范
        document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
}

function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', {
        'fontSize': 0
    });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function () {
        WeixinJSBridge.invoke('setFontSizeCallback', {
            'fontSize': 0
        });
    });
}