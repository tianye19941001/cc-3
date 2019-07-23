 $(document).ready(function () {

 	// 辐射动物园
	// repoort动画
	var timer = null;
	var count = 1;
	window.onload = function(){
		timer = setInterval(function() {
			if(count == 8){
				timer = null;
				return
			} else {
				$('.page-1 .report').attr('class', 'report report-' + count);
				count ++;
			}
		}, 100)
	}
 	var gyList = [0, 2.5, 5, 8, 20, 50, 100, 500]
 	$('.articles .in').height($(window).height())

 	$('.page-index .articles .in').swipeUp(function () {
 		$('.articles').addClass('active');
 	})

 	$('.page-index .articles .in').swipeDown(function () {
 		$('.articles').removeClass('active');
 	})

 	$('.page-index .articles h2').click(function () {
 		$('.articles').toggleClass('active');
	 })
	 
	 $('#back-list').click(function(){
		 window.history.go(-1)
	 })

 	$('.bottom-line, .page-zoom .bg').swipeRight(function () {
 		var nowClass = $('.page-zoom').attr('class');
 		var newIndex = parseInt(nowClass.slice(-1, nowClass.length)) + 1;
 		if (newIndex > 8) return;
 		changeData(newIndex)
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
 			console.log(11)
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
 });