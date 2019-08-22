fnResize();
window.addEventListener("resize", function() {
    fnResize()
}, false);
function fnResize(){
    var docWidth = document.documentElement.clientWidth,
            body = document.getElementsByTagName('html')[0];
    body.style.fontSize = docWidth / 36 + 'px';
}