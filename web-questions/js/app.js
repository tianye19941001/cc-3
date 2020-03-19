 initData(questionData)

 function initData(data) {
 	var listData_1 = data.list1;
 	var listData_2 = data.list2;
 	var listData_3 = data.list3;
 	var wapDom_1 = $('.ques-list-1');
 	var wapDom_2 = $('.ques-list-2');
 	var wapDom_3 = $('.ques-list-3');
 	initList(listData_1, wapDom_1)
 	initList(listData_2, wapDom_2)
 	initList(listData_3, wapDom_3)
 }

 function initList(data, wapDom) {
 	if (data.length == 0) return;

 	data.forEach(function (item, index, slef) {
 		var type = item.type;
 		switch (type) {
 			case 1:
 				wapDom.append(initRadioDom(item, 'radio'))
 				break;
 			case 2:
 				wapDom.append(initRadioDom(item, 'check'))
 				break;
 			case 3:
 				wapDom.append(initRadioDom(item, 'single'))
 				break;
 			case 4:
 				wapDom.append(initRadioDom(item, 'icon'))
 				break;
 			default:
 				break;
 		}
 	});
 }

 function initRadioDom(data, type) {
 	var liDom = $('<li><input class="choose-data-inp" name="' + data.name + '" type="hidden" /><br /><br /></li>');
 	var imgDom = $('<img class="icon-dom" src="' + data.icon + '" /><br ><br >');
 	var titleDom = $('<h3>' + data.title + '' + (type == 'check' ? (data.title.length > 16 ? '' : '<br>') + '<em class="more">可多选</em>' : '') + '</h3><br ><br ><br >');

 	if (type != 'check') {
 		titleDom.append('<br ><br >')
 	}

 	liDom.append(imgDom)
 	liDom.append(titleDom)
 	if (data.desc) {
 		var descDom = $('<p class="desc">' + data.desc + '</p><br />');
 		liDom.append(descDom)
 	}

 	var ulDom = $('<ul></ul>')
 	ulDom.addClass(type + '-ul');

 	data.choose.forEach(function (item, index) {
 		var dom;
 		if (type == 'single') {
 			dom = $('<li data-val="' + item.value + '"><span>' + item.text + '</span></li>')
 		} else if (type == 'icon') {
 			dom = $('<li data-val="' + item.value + '"><i></i><span class="img"><img src="' + item.icon + '"/></span><span>' + item.text + '</span></li>')
 		} else {
 			dom = $('<li data-val="' + item.value + '"><i></i><span>' + item.text + '</span></li>')
 		}
 		ulDom.append(dom);
 	})

 	liDom.append(ulDom);

 	if (type == 'check') {
 		liDom.append('<br /><p class="btns btns2"><a class="check-next btn-1">无</a></p>')
 	}

 	if (type == 'icon') {
 		liDom.append('<br /><p class="btns btns2"><a class="icon-next btn-1">都不是</a></p>')
 	}

 	return liDom;
 }


 $(document).ready(function () {
 	// 动画延时函数
 	function adddelay(obj, time) {
 		if (obj.length > 0) {
 			for (var i = 0; i < obj.length; i++) {
 				obj.eq(i).addClass('an_delay' + (i * time + 3));
 			}
 		}
 	}

 	// 动画增加函数
 	function addAnimate(elem, Class, count, nums) {
 		if (elem.length > 0) {
 			var offsetT = elem.offset().top;
 			var overHeight = $(document).scrollTop() + $(window).height() - 80;
 			if (elem.length >= 1) {
 				for (var i = 0; i < elem.length; i++) {
 					if (overHeight > elem.eq(i).offset().top) {
 						if (!elem.eq(i).hasClass(Class)) {
 							elem.eq(i).addClass(Class);
 						}
 					}
 				}
 			}
 		}
 	}

 	// 动画
 	function animateInit() {
 		var toTop = '.red_index_main1 h2,.red_index_main1 h3,.red_index_main1 h4,.red_index_main2_list a, .jidiIn .middle, .gov .l,.red_intro1 img, .new_intro .pic_list, .time_list li, .pic_text li,.new_intro h2, .red_intro4 p, .intro_xm_text h2, .intro_xm_shop li';
 		var toLeft = '.red_index_main1 img, .red_index_main3 h3, .red_index_main5In .l ,.about1Int h3, .jidiIn .l, .red_intro1 h3, .listpic li, .intro_xm_text h3';
 		var toRight = '.red_index_main2 .tit, .Enterprise_intr p, .red_index_main5In .r ,.about1Int strong , .jidiIn .r, .red_intro1 p,.red_intro4 h2, .intro_xm_shop h2, .fengcai li';
 		var toBottom = '.red_index_main1 p, .red_tit_o, .red_index_main5In .m, .about1Int p, .about1In .red_abouttit, .tob_bannar img,.red_introtit, .wayin, .fengcai h2';
 		addAnimate($(toTop), 'an_toTop');
 		addAnimate($(toLeft), 'an_toLeft');
 		addAnimate($(toRight), 'an_toRight');
 		addAnimate($(toBottom), 'an_toBottom');
 	}

 	$(window).scroll(function () {
 		animateInit();
 	});

 	(function init() {
 		animateInit();
 	})();
 });