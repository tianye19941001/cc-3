 $(document).ready(function(){
	var ty_public = { 
		brower: function(){
			var userAgent = navigator.userAgent; 
		    var isOpera = userAgent.indexOf("Opera") > -1;
		    if (isOpera) {
		        return "Opera"
		    }; 
		    if (userAgent.indexOf("Firefox") > -1) {
		        return "FF";
		    } 
		    if (userAgent.indexOf("Chrome") > -1){
			  return "Chrome";
			 }
		    if (userAgent.indexOf("Safari") > -1) {
		        return "Safari";
		    } 
		    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		    	var IEMethod = userAgent.slice(userAgent.indexOf("MSIE")+5,userAgent.indexOf("MSIE")+6);
		        return IEMethod;
		    }
		},
		stopDefault:function(e){
			if ( e && e.preventDefault ){
				e.preventDefault(); 
			}else{
				window.event.returnValue = false; 
				return false;
			}
		},
		stopBubble:function(e){
			if ( e && e.stopPropagation ){
				e.stopPropagation(); 
			}else{
				window.event.cancelBubble = true;
				return false;
			}
		},
		setCookies: function (c_name,value,expiredays)
		{
			var exdate=new Date();
			exdate.setDate(exdate.getDate()+expiredays);
			document.cookie= c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		},
		getCookies: function(c_name){
			if (document.cookie.length>0){
				c_start=document.cookie.indexOf(c_name + "=")
				if (c_start!=-1){ 
				    c_start=c_start + c_name.length+1 
				    c_end=document.cookie.indexOf(";",c_start)
			    	if (c_end==-1) c_end=document.cookie.length
			   		return unescape(document.cookie.substring(c_start,c_end))
			    } 
			}
			return ""
		}
	}

	// 滚动到指定元素
	function movescroll(to) {
		$('html,body').animate({scrollTop: $(to).offset().top-60},600);
	}
	
	if (document.body.clientWidth >= 1024) {

	}else{

	}

	// 动画延时函数
	function adddelay(obj,time){
		if (obj.length>0) {
			for (var i = 0; i < obj.length; i++) {
				obj.eq(i).addClass('an_delay'+(i*time+3));
			}
		}
	}

	// 动画增加函数
	function addAnimate(elem,Class,count,nums){
		if( elem.length > 0){
			var offsetT = elem.offset().top;
			var overHeight = $(document).scrollTop() + $(window).height() - 80;
			if (elem.length>=1){
				for( var i = 0; i < elem.length; i++ ){
					if (overHeight > elem.eq(i).offset().top){
						if (!elem.eq(i).hasClass(Class)) {
							elem.eq(i).addClass(Class);
						}
					}
				}
			}
		}
	}

	// 动画
	function animateInit(){
		var toTop = '.red_index_main1 h2,.red_index_main1 h3,.red_index_main1 h4,.red_index_main2_list a, .jidiIn .middle, .gov .l,.red_intro1 img, .new_intro .pic_list, .time_list li, .pic_text li,.new_intro h2, .red_intro4 p, .intro_xm_text h2, .intro_xm_shop li';
		var toLeft = '.red_index_main1 img, .red_index_main3 h3, .red_index_main5In .l ,.about1Int h3, .jidiIn .l, .red_intro1 h3, .listpic li, .intro_xm_text h3';
		var toRight = '.red_index_main2 .tit, .Enterprise_intr p, .red_index_main5In .r ,.about1Int strong , .jidiIn .r, .red_intro1 p,.red_intro4 h2, .intro_xm_shop h2, .fengcai li';
		var toBottom = '.red_index_main1 p, .red_tit_o, .red_index_main5In .m, .about1Int p, .about1In .red_abouttit, .tob_bannar img,.red_introtit, .wayin, .fengcai h2';
		addAnimate($(toTop),'an_toTop');
		addAnimate($(toLeft),'an_toLeft');
		addAnimate($(toRight),'an_toRight');
		addAnimate($(toBottom),'an_toBottom');
	}

	$(window).scroll(function() {
  	animateInit();
	});

	(function init(){
		animateInit();
	})();
});
