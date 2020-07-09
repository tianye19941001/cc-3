fnResize();
window.addEventListener("resize", function () {
    fnResize()
}, false);

function fnResize() {
    var docWidth = document.documentElement.clientWidth,
        body = document.getElementsByTagName('html')[0];
    body.style.fontSize = docWidth / 25 + 'px';
}

var docWidth = document.documentElement.clientWidth;
var docEl = document.documentElement
// 用原生方法获取用户设置的浏览器的字体大小(兼容ie)
if (docEl.currentStyle) {
    var user_webset_font = docEl.currentStyle['fontSize']
} else {
    var user_webset_font = getComputedStyle(docEl, false)['fontSize']
}

user_webset_font = parseFloat(user_webset_font)
// rem缩放比例
var fontScale = user_webset_font / (docWidth / 25) 

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