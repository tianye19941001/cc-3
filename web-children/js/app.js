 $(document).ready(function(){
	$('.open-div h2').click(function(){
		$(this).parent().toggleClass('open');
		setTimeout(function(){
			$('.table-public tr').each(function(){
				var index = $(this).parent().find('tr').index($(this));
				var height = $(this).height();
		
				var divs = $(this).parents('.table-public-warp').find('.left-icons > div');
				divs.eq(index).height(height+ 1)
			})
		},0)
	})

	$('.table-public tr').each(function(){
		var index = $(this).parent().find('tr').index($(this));
		var height = $(this).height();

		var divs = $(this).parents('.table-public-warp').find('.left-icons > div');
		divs.eq(index).height(height+ 1)
	})


	$('.report-new-tabs span').click(function(){
		var index = $('.report-new-tabs span').index($(this));
		$('.report-new-tabs span').removeClass('active').eq(index).addClass('active');
		$('.report-new-tabs-box').removeClass('active').eq(index).addClass('active');
	})
});
