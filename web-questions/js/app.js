 var qusLen = 1;
 var jumpRemember = {}

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

 	qusLen = listData_1.length + listData_2.length + listData_3.length;
 	$('.progress .num').text(parseInt(100 / qusLen) + '%')
 	$('.progress .in i').css({
 		width: parseInt(100 / qusLen) + '%'
 	})
 }

 function jumpQus(name, isBack) {
	var from = $('.ques-list>.active').find('.choose-data-inp').attr('name');
	if(!isBack) {
		jumpRemember[name] = from
	} else {
		jumpRemember[isBack] = null
	}
	gotoQus($('.qus-' + name))
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
 	var liDom = $('<li class="qus-' + data.name + '"><input class="choose-data-inp" name="' + data.name + '" type="hidden" /><br /><br /></li>');
 	var imgDom = $('<img class="icon-dom" src="' + data.icon + '" /><br ><br >');
 	var titleDom = $('<h3>' + data.title + '' + (type == 'check' ? (data.title.length > 16 ? '' : '<br>') + '<em class="more">（可多选）</em>' : '') + '</h3><br ><br ><br >');

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
		 
		 if(type == 'check' && item.text.length > 6) {
			 dom.css({width: '100%'})
		 }

 		if (item.jump) {
 			dom.attr('data-jump', item.jump)
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

 function getAllData() {
 	var param = {
 		name: $('#name').val(),
 		qus: {}
 	}

 	$('.choose-data-inp').each(function () {
 		var inpName = $(this).attr('name');
 		var val = $(this).val();
 		param.qus[inpName] = val;
 	})
 	return param
 }

 function gotoQus(qusDom, domNow, type) {
 	if (qusDom.length == 0 && !type) {
 		var nextList = domNow.parents('.ques-list').next();
 		if (nextList.hasClass('progress')) {
 			$('.qus-body .btn-1').trigger('touchend')
 		} else {
 			domNow.hide().removeClass('active');
 			var index = $('.ques-list').index(domNow.parents('.ques-list'));
 			$('.progress').hide();
			 $('.nav-list').show().find('.active').removeClass('active')
			 $('.nav-list span').eq(index + 1).addClass('active');
 			setTimeout(function () {
 				$('.nav-list').hide();
 				$('.progress').show();
 				var dom = nextList.children('li').eq(0)
 				dom.show();
 				setTimeout(function () {
 					dom.addClass('active');
 					countProgress()
 				}, 10)

 			}, 1500)
 		}
 	} else if (qusDom.length == 0 && type == 'prev') {
 		var prevList = domNow.parents('.ques-list').prev();
 		if (prevList.hasClass('nav-list')) {
 			alert('已经是第一题了！')
 		} else {
 			domNow.hide().removeClass('active');
			 var index = $('.ques-list').index(domNow.parents('.ques-list'));
 			$('.progress').hide();
			 $('.nav-list').show().find('.active').removeClass('active')
			 $('.nav-list span').eq(index - 1).addClass('active');
 			setTimeout(function () {
 				$('.nav-list').hide();
 				$('.progress').show();
 				var dom = prevList.children('li').eq(prevList.children('li').length - 1)
 				dom.show();
 				setTimeout(function () {
 					dom.addClass('active');
 					countProgress()
 				}, 10)
 			}, 1500)
 		}
 	} else {
		var index = $('.ques-list').index(qusDom.parents('.ques-list'));
		$('.nav-list span').removeClass('active').eq(index).addClass('active');
 		$('.ques-list>li').hide().removeClass('active');
 		qusDom.show();
 		setTimeout(function () {
 			qusDom.addClass('active')
 			countProgress()
 		}, 10)
 	}
 }

 function countProgress() {
 	var num;
 	$('.ques-list > li').each(function (index) {
 		if (!$(this).hasClass('active')) return;
 		if (index == ($('.ques-list > li').length - 1)) {
 			num = '100%';
 		} else {
 			num = parseInt((index + 1) / $('.ques-list > li').length * 100) + '%'
 		}
 	})

 	$('.progress .num').text(num);
 	$('.progress .in i').css({
 		width: num
 	})
 }


 $(document).ready(function () {
 	$('body').on('touchend', '.next-normal',function () {
 		$(this).parents('.inner-body').removeClass('active').hide().next().show().addClass('active');
 		if ($(this).parents('.inner-body').next().hasClass('auto-next')) {
			 var dom = $(this).parents('.inner-body').next();
			 var isFast = $(this).parents('.inner-body').next().hasClass('fast-auto-next')
			 var isMiddle = $(this).parents('.inner-body').next().hasClass('middle-auto-next')
			 var time = 3000
			 if(isFast) time = 1500
			 if(isMiddle) time = 2300
 			setTimeout(function () {
 				dom.find('.next-normal').trigger('touchend')
 			}, time	)
		 }
		 
		 if ($(this).parents('.inner-body').next().hasClass('needbac')) {
			 $('.main-body').addClass('bac')
		 }

		 if ($(this).parents('.inner-body').next().hasClass('last-page')) {
			if (callBackLast) callBackLast()
		}

 		if ($(this).parents('.inner-body').next().hasClass('qus-body')) {
 			var dom = $(this).parents('.inner-body').next();
 			dom.find('.nav-list span').eq(0).addClass('active');
 			setTimeout(function () {
 				dom.find('.nav-list').hide();
 				$('.progress').show();
 				$('.ques-list-1>li').eq(0).show().addClass('active');
 			}, 1500)
 		}
 	})

 	$('body').on('touchend', '.radio-ul li, .single-ul li, .icon-ul li', function () {
		 var qusDom = $(this).parents('li');
		 var value = $(this).data('val');
 		qusDom.find('.choose-data-inp').val(value)
 		$(this).addClass('active').siblings().removeClass('active')

 		var jump = $(this).data('jump');

 		setTimeout(function () {
 			// if (jump) {
				var name = qusDom.find('.choose-data-inp').attr('name');
				if (callBackJump) callBackJump({[name]: value}, jump)
 			// } else {
 				// gotoQus(qusDom.next(), qusDom)
 			// }

 		}, 300)
 	})

 	$('body').on('touchend', '.check-ul li',function () {
 		var qusDom = $(this).parents('li');
 		$(this).toggleClass('active');
 		var arr = [];
 		$(this).parent().find('li').each(function () {
 			if ($(this).hasClass('active')) {
 				arr.push($(this).data('val'))
 			}
 		})

 		qusDom.find('.btn-1').text(arr.length == 0 ? '无' : '确定')
 		qusDom.find('.choose-data-inp').val(arr.join(','))
	 })

 	$('body').on('touchend', '.ques-list li .btn-1',function () {
 		var qusDom = $(this).parents('li');
 		gotoQus(qusDom.next(), qusDom)
 	})

 	$('body').on('touchend', '.progress .prev', function () {
		 var domNow = $('.ques-list>li.active');
		 var from = domNow.find('.choose-data-inp').attr('name');
		 if(jumpRemember[from]) {
			 jumpQus(jumpRemember[from], from)
			 return
		 }
 		gotoQus(domNow.prev(), domNow, 'prev')
 	})

 	$('#name').on('input', function () {
 		var btns = $(this).parents('.inner-body').find('.btns');
 		if ($(this).val() == '') {
 			btns.hide();
 		} else {
 			$('#name-is').text($(this).val())
 			btns.show();
 		}
 	})

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

	 if($('.progress-pic .num').length > 0) {
		var roundData = $('.progress-pic .num').text();
		var deg = (roundData - 55) * (18 / 4);
		$('.progress-pic .point').css('transform', 'rotate('+ deg +'deg)')
	 }

	 $('.inner-body').eq(1).addClass('active')

	 $('.move-latter').eq(0).addClass('active');

	 setTimeout(function(){
		$('.move-latter').eq(1).addClass('active');
	 },1000)
	 
 });