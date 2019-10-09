 $(document).ready(function () {

 	// 辐射动物园
 	// repoort动画
 	var timer = null,
 		timer2 = null;
 	var count = 1;
 	window.onload = function () {
 		timer = setInterval(function () {
 			if (count % 50 > 7) {
 				$('.page-1 .report').attr('class', 'report report-7');
 				count++;
 			} else {
 				$('.page-1 .report').attr('class', 'report report-' + count % 50);
 				count++;
 			}
 		}, 100)
 	}
 	var gyList = [0, 2.5, 5, 8, 20, 50, 100, 500]
 	$('.articles .in').height($(window).height())

 	$('.page-index').swipeUp(function (e) {
 		$('.articles').addClass('active');
 	})

 	$('.page-index .articles .in').swipeDown(function (e) {
 		console.log(e.target)
 		e.stopPropagation()
 		$('.articles').removeClass('active');
 	})

 	$('.page-index .article-list').swipeDown(function (e) {
 		console.log(e.target)
 		e.stopPropagation()
 	})

 	$('.page-index .articles h2').click(function () {
 		$('.articles').toggleClass('active');
 	})

 	$('#back-list, #back-icon').click(function () {
 		window.history.go(-1)
 	})

 	$('.bottom-line, .page-zoom .bg').swipeRight(function () {
 		var nowClass = $('.page-zoom').attr('class');
 		var newIndex = parseInt(nowClass.slice(-1, nowClass.length)) + 1;
 		if (newIndex > 8) return;
 		changeData(newIndex)
 	});

 	$('#add').click(function () {
 		$('.page-zoom .bg').trigger('swipeRight')
 	})

 	$('#reduce').click(function () {
 		$('.page-zoom .bg').trigger('swipeLeft')
 	})

 	$('.bottom-line, .page-zoom .bg').swipeLeft(function () {
 		var nowClass = $('.page-zoom').attr('class');
 		var newIndex = parseInt(nowClass.slice(-1, nowClass.length)) - 1;
 		if (newIndex < 1) return;
 		changeData(newIndex)
 	})

 	function changeData(newIndex) {
 		$('.data strong').text(gyList[newIndex - 1]);
 		$('.in').hide();
 		$('.in-' + newIndex).show(1000);
 		$('.bg').attr('src', './images/in-' + newIndex + '.jpg');
 		$('.page-zoom').attr('class', 'page page-zoom page-zoom-' + newIndex)
 	}

 	var personVideo = $('#person-video').get(0);

 	if ($('#person-video').length > 0) {
 		personVideo.onloadeddata = function () {
 			$('.dialog-person').hide();
 			personVideo.play()
 			personVideo.pause()
 		}

 		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
 			if (window.orientation === 180 || window.orientation === 0) {
 				console.log("竖屏");
 			}
 			if (window.orientation === 90 || window.orientation === -90) {
 				console.log("横屏");
 			}
 		}, false);
 	}

 	$('.step .next, .step .prev').click(function () {
 		var index = $(this).data('step');
 		$('.page-report-2').attr('class', 'page page-report-2 step-inner-' + index);
 	})

 	// document.getElementById('articles').addEventListener('touchmove', function(e) {
 	// 	e.stopPropagation()	
 	// });

 	$('body').swipeUp(function (e) {
 		e.preventDefault();
 	}, {
 		passive: false
 	})

 	// 报告
 	var video = document.getElementById('byl_video');

 	if ($(video).length > 0) {
 		videoInter = setInterval(function () {
 			var nowText = Number($('.num-warp .num').text());
 			if (nowText >= 100) {
 				$('.dialog-person').hide()
 				$('.report-next').show()

 				clearInterval(videoInter)
 			}
 			$('.num-warp .num').text(nowText + 1)
 		}, 20)

 		video.addEventListener('loadedmetadata', function () {
 			$('.num-warp .num').text(100)
 			$('#byl_video')[0].play()
 			$('#byl_video')[0].pause()
 		});

 		$('.report-next').click(function () {
 			$(this).hide()
 		})

 		document.addEventListener("WeixinJSBridgeReady", function () {
 			video.play();
 			video.pause();
 		}, false);

 		video.play();
 		video.pause();

 		document.body.addEventListener('click', function (e) {
 			if ($('.video-person').length) video.play(), video.pause();
 		});

 		document.body.addEventListener('touchstart', function (e) {
 			$('.poster').hide()

 			if ($('.video-person').length) $('#byl_video')[0].play();
 		});

 		document.body.addEventListener('touchend', function (e) {
 			if ($('.video-person').length) video.pause();
 		});

 		video.addEventListener('ended', function (e) {
 			$('.video-person').remove()
 			$('.step-inner-1').show()
 		})
 	}

 	var video2 = document.getElementById('byl_video2');

 	if ($(video2).length > 0) {
 		numInter = setInterval(function () {
 			var nowText = Number($('.num-warp .num').text());
 			if (nowText >= 100) {
 				$('.dialog-person').hide();
 				$('.next').show();
 				clearInterval(numInter);
 			}
 			$('.num-warp .num').text(nowText + 1)
 		}, 20)

 		video2.addEventListener('loadedmetadata', function () {
 			$('.num-warp .num').text(100)
 			$('#byl_video2')[0].play()
 			video2.pause();
 		});

 		document.addEventListener("WeixinJSBridgeReady", function () {
 			video2.play();
 			video2.pause();
 		}, false);

 		video2.play();
 		video2.pause();

 		$('.next').on('touchstart', function () {
 			video2.play();
 		})

 		$('.next').on('click', function () {
 			$(this).addClass('next-2');
 		})

 		document.body.addEventListener('click', function (e) {
 			if ($('.video-person').length) video2.play(), video2.pause();
 		});

 		document.body.addEventListener('touchstart', function (e) {
 			$('.poster').hide()

 			if ($('.video-person').length) $('#byl_video')[0].play();
 		});

 		document.body.addEventListener('touchend', function (e) {
 			if ($('.video-person').length) video2.pause();
 		});

 		video2.addEventListener('ended', function (e) {
 			video2.pause();
 			$('.next').hide();
 			$('.restart, .back').show();
 		})

 		$('.restart').click(function (e) {
 			e.stopPropagation()
 			$('.restart, .back').hide();
 			video2.play()
 			setTimeout(function () {
 				video2.pause()
 			}, 1000)
 			$('.next').show();
 		})

 		$('.back').click(function () {
 			window.history.go(-1);
 		})
 	}

 	if ($('.page-index').length > 0) {
 		// 	document.body.addEventListener('touchmove', function (e) {
 		// 		 if (e._isScroller) return;
 		// 		 if ($('.articles').hasClass('active')) return;
 		// 		e.preventDefault();
 		// 	}, {
 		// 		passive: false
 		// 	 });

 		// 	 $('.page-index .articles .in').get(0).addEventListener('touchmove', function (e) {

 		// 		e.preventDefault();
 		// 	}, {
 		// 		passive: false
 		// 	});

 		var overscroll = function (el) {
 			el.addEventListener('touchstart', function () {
 				var top = el.scrollTop;
 				var totalScroll = el.scrollHeight;
 				var currentScroll = top + el.offsetHeight;
 				if (top === 0) {
 					el.scrollTop = 1;
 				} else if (currentScroll === totalScroll) {
 					el.scrollTop = top - 1;
 				}
 			});
 			el.addEventListener('touchmove', function (evt) {
 				if (el.offsetHeight < el.scrollHeight) {
 					evt._isScroller = true;
 				}
 			});
 		}
 		overscroll(document.querySelector('.scroll')); //哪里需要可以局部滚动，添加一个“scroll”的class
 		document.body.addEventListener('touchmove', function (evt) {
 			if (!evt._isScroller) {
 				evt.preventDefault();
 			}
 		}, {
 			passive: false
 		});
 	}

 });