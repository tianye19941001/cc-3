 $(document).ready(function () {

 	// 辐射动物园
	// repoort动画
	var timer = null, timer2 = null;
	var count = 1;
	window.onload = function(){
		timer = setInterval(function() {
			if(count%100 > 7){
				$('.page-1 .report').attr('class', 'report report-7');
				count ++;
			} else {
				$('.page-1 .report').attr('class', 'report report-' + count%100);
				count ++;
			}
		}, 100)
	}
 	var gyList = [0, 2.5, 5, 8, 20, 50, 100, 500]
 	$('.articles .in').height($(window).height())

 	$('.page-index').swipeUp(function (e) {
		$('.articles').addClass('active');
 	})

 	$('.page-index .articles .in').swipeDown(function (e) {
		e.stopPropagation()
 		$('.articles').removeClass('active');
 	})

 	$('.page-index .articles h2').click(function () {
 		$('.articles').toggleClass('active');
	 })
	 
	 $('#back-list, #back-icon').click(function(){
		 window.history.go(-1)
	 })

 	$('.bottom-line, .page-zoom .bg').swipeRight(function () {
 		var nowClass = $('.page-zoom').attr('class');
		 var newIndex = parseInt(nowClass.slice(-1, nowClass.length)) + 1;
 		if (newIndex > 8) return;
 		changeData(newIndex)
	 });
	 
	 $('#add').click(function(){
		$('.page-zoom .bg').trigger('swipeRight')
	 })

	 $('#reduce').click(function(){
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
	
	$('.step .next, .step .prev').click(function(){
		var index = $(this).data('step');
		$('.page-report-2').attr('class','page page-report-2 step-inner-' + index);
	})

	// document.getElementById('articles').addEventListener('touchmove', function(e) {
	// 	e.stopPropagation()	
	// });

	$('body').swipeUp(function(e){
		e.preventDefault();
	}, {
		passive: false
	})

	// 报告
	var video = document.getElementById('byl_video');

	if($(video).length > 0){
		
		setInterval(function(){
			var nowText = Number($('.num-warp .num').text());
			if(nowText >= 100) {
				$('.dialog-person').hide()
			}
			$('.num-warp .num').text(nowText + 1)
		}, 20)

		video.addEventListener('loadedmetadata',function(){
			$('.num-warp .num').text(100)
			$(video).trigger('click');
			video.play();
			video.pause();
		});

		document.addEventListener("WeixinJSBridgeReady", function() {
			video.play();
			video.pause();
		}, false);
	
		video.play();
		video.pause();

		document.body.addEventListener('click', function(e) {
			if($('.video-person').length) video.play();
		});
		
		document.body.addEventListener('touchstart', function(e) {
			$('.poster').hide()
			if($('.video-person').length) video.play();
		});

		document.body.addEventListener('touchend', function(e) {
			if($('.video-person').length) video.pause();
		});

		video.addEventListener('ended', function(e){
			$('.video-person').remove()
			$('.step-inner-1').show()
		})
	}


	document.body.addEventListener('touchmove', function(e) {
		// if($('.articles').hasClass('active')) return
		if(e._isScroller) return;
		e.preventDefault();
	}, {
		passive: false
	});

});